import { IncomingForm } from 'formidable'

export const formidableInst = new IncomingForm({
  allowEmptyFiles: false,
  keepExtensions: true
})
