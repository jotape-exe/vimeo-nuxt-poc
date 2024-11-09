import { $fetch } from "ofetch"
import VimeoAPI from "../api/VImeoAPI"

export default defineNuxtPlugin((nuxtApp) => {
  interface IHttpServices {
    vimeo: VimeoAPI
  }

  const config = useRuntimeConfig()

  const USER_ID = config.public.userId
  const FOLDER_ID = config.public.projectId
  const TOKEN = config.public.tokenVimeo
  const API_BASE: any = config.public.apiBase

  const myHeaders = {
    Authorization: `bearer ${TOKEN}`,
    "Content-Type": "application/json",
  }

  const http = $fetch.create({
    baseURL: API_BASE,
    ignoreResponseError: true,
    onRequest({ request, options, response }) {
      options.headers = Object.assign(myHeaders, options.headers)
    },
  })

  const services: IHttpServices = {
    vimeo: new VimeoAPI(http, USER_ID, FOLDER_ID),
  }

  return {
    provide: {
      http: services,
    },
  }
})
