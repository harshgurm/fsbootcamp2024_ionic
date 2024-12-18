import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { UserPhoto } from '../user-photo';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public photos:any = [];
  
  private PHOTO_STORAGE:string = 'photos';


  private async savePicture(photo:Photo){
    
    const base64Data = await this.readAsBase64(photo);

    const fileName = Date.now() + "jpeg";
    const saveFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    return {
      filepath: fileName,
      webviewpath:photo.webPath
    }

  }

  private async readAsBase64(photo: Photo) {
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();

      return await this.convertBlobToBase64(blob) as string;
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise ((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      console.log(reader);
      resolve(reader.result);
    }
    reader.readAsDataURL(blob);
  })

  public async addPhotoToGallery(){
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    console.log(photo);

    // this.photos.unshift({
    //   filepath: "soon",
    //   webviewPath: photo.webPath
    // })

    const savedImage = await this.savePicture(photo);
    this.photos.unshift(savedImage);

    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    })

  }

  public async loadSaved(){
    const { value } = await Preferences.get({key:this.PHOTO_STORAGE});
    this.photos = (value ? JSON.parse(value): []) as UserPhoto[];
  }

  for(let photo of this.photos){
    const readFile = await Filesystem.readFile({
      path: photo.filepath,
      directory:Directory.Data,
    })

    photo.webviewPath = `data:image/jpeg;base64, ${readFile.data}`;
  }


}
