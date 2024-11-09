import type { $Fetch } from "ofetch"

class VimeoAPI {
  private http: $Fetch
  private userId: any
  private folderId: any

  constructor(http: $Fetch, userId: any, folderId: any) {
    this.http = http
    this.folderId = folderId
    this.userId = userId
  }

  listarVideos = async () => {
    return await this.http(
      `/users/${this.userId}/projects/${this.folderId}/videos`,
      {
        method: "GET",
      }
    )
  }
}

export default VimeoAPI
