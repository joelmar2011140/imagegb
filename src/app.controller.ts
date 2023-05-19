import type { Request, Response, NextFunction } from 'express'
import { formidableInst } from './lib/formidable'
import sharp from 'sharp'
import { rembg } from './lib/rembg'
import cloudinary from 'cloudinary'

cloudinary.v2.config({
  secure: true,
  api_key: '736259497485813',
  api_secret: 'YG_vwaPjPBGe1BN1ejyDRVPqVCg',
  cloud_name: 'joel2011140-images-cloud'
})

export async function removeBackgroundHttp (req: Request, res: Response, next: NextFunction): Promise<void> {
  formidableInst.parse(req, async (err: any, fields: any, files: any) => {
    try {
      if (err != null) {
        console.error(err)
      }
      if (files.imagem == null) {
        return res.status(400).json({
          mensagem: 'Submeta por favor uma imagem'
        })
      } if (!['image/jpg', 'image/jpeg', 'image/gif', 'image/webp'].includes(files.imagem.mimetype)) {
        return res.status(400).json({
          mensagem: 'Submeta por favor uma imagem válida'
        })
      }
      const input = sharp(files.imagem.filepath)
      const output = await rembg.remove(input)
      await output.toFile(files.imagem.newFilename)
      console.log(files.imagem.newFilename)
      const resultado = await cloudinary.v2.uploader.upload(files.imagem.newFilename)
      return res.status(201).json({ url: resultado.secure_url })
    } catch (err: any) {
      console.log('erro em removeBackgroundHttp ', err)
    }
  })
}
