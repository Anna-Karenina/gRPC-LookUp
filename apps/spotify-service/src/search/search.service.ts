import { Injectable } from '@nestjs/common';
import * as SpotifyWebApi from 'spotify-web-api-node';

// var credentials = {
//   clientId: "7036c52f08d242369375a29b79455c12",
//   clientSecret: "5f483648af8242818f89750f3298d62c",

//   accessToken: code,
// };
// var

@Injectable()
export class SearchService {
  private static code =
    'BQCr-dZNdWcL4t1omoCwgTth8_McM2w5wNtZW0EVx_xeGsKBL-GK2RE9ZBkRUHj3Yv6BBzkPguP1wg5oSppBCvtm5SRhig0HU6Zl3-teOUSPsBu2b58sd2JJIwSk-3eSneXDBhdbrObibha6Ghv64N7YujFlNatru1gmlVnUE7TOCmQ';
  private credentials = {
    clientId: '7036c52f08d242369375a29b79455c12',
    clientSecret: '5f483648af8242818f89750f3298d62c',
    accessToken: SearchService.code,
  };
  spotifyApi;
  constructor() {
    this.spotifyApi = new SpotifyWebApi(this.credentials);
  }

  public searchByQuery(query): any[] {
    return this.spotifyApi.searchTracks(query, { limit: 5 }).then(
      function (data) {
        console.log(
          'Search by "Love"',
          data.body.tracks.items.forEach((i) => {
            console.log(i.name);
          }),
        );
      },
      function (err) {
        console.error(err);
      },
    );
  }
}
