import React from 'react'
export const prerender = false
import { CldUploadWidget } from 'astro-cloudinary'
import { getLangFromUrl, useTranslations } from './i18n/utils'
export default function CreateProject(titleLabel: string, descriptionLabel: string, techsLabel: string, repoUrlLabel: string, deployUrlLabel: string) {
  return (
    <form>
      <label htmlFor="title"></label>
      <input type="text" name="title" id="title" />
      <label htmlFor="description"></label>
      <input type="text" name="description" id="description" />
      <label htmlFor="techs"></label>
      <input type="text" name="techs" id="techs" />
      <label htmlFor="repoUrl"></label>
      <input type="text" name="repoUrl" id="repoUrl" />
      <label htmlFor="deployUrl"></label>
      <input type="text" name="deployUrl" id="deployUrl" />
    </form>
  )
}
