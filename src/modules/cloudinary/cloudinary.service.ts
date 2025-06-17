import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');
import { extname } from 'path';
@Injectable()
export class CloudinaryService {
  private generateFileName(originalName: string): string {
    const timestamp = Date.now();
    const fileExtension = extname(originalName);
    const baseName = originalName.replace(/\.[^/.]+$/, '');
    return `${baseName}_${timestamp}${fileExtension}`;
  }

  async uploadFile(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    const customFileName = this.generateFileName(file.originalname);
    console.log(customFileName);
    
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream(
        {
          folder: 'mineduc-form/uploads', // more generic folder name
          public_id: customFileName.replace(extname(customFileName), ''), // Cloudinary auto-detects extension
          resource_type: 'auto', // allows non-image files (e.g., pdf, docx)
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );

      toStream(file.buffer).pipe(upload);
    });
  }
}
