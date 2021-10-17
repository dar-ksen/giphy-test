export default class GiphyService {
  _apiBase = "https://api.giphy.com/v1/gifs";
  _apiKey = "QekbxCX1T6ljcnHvzJPyofrj7NRZqwmN";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      let erorr = new Error(`Could not fetch ${url}, received ${res.status}`);
      erorr.status = res.status;

      throw erorr;
    }
    return await res.json();
  };

  getRandomePicture = async (tag = "") => {
    const url = `/random?api_key=${this._apiKey}&tag=${tag}`;

    return await this.getResource(url);
  };

  // _transformPicture = (picture, tag) => {
  //   return {
  //     tag,
  //     id: picture.data.id,
  //     url: picture.data.image_url,
  //     width: picture.data.image_width,
  //     height: picture.data.image_height,
  //     alt:
  //       picture.data.caption !== ""
  //         ? picture.data.caption
  //         : `giphy pictures on tag ${tag}`,
  //   };
  // };
}
