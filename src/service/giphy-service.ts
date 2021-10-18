interface ErrorWithStatus extends Error {
  status?: string | number;
}

export default class GiphyService {
  _apiBase = "https://api.giphy.com/v1/gifs";
  _apiKey = "gTJAO48YcpmrADUyo4opy4ES4g7iDBxx";

  getResource = async (url:string) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      let erorr = new Error(`Could not fetch ${url}, received ${res.status}`) as ErrorWithStatus;
      erorr.status = res.status;
      throw erorr;
    }
    return await res.json();
  };

  getRandomePicture = async (tag = "") => {
    const url = `/random?api_key=${this._apiKey}&tag=${tag}`;

    return await this.getResource(url);
  };
}
