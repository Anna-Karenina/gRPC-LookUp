import { Injectable } from '@nestjs/common';

const code =
  'BQBuh4jY4Epj3U1vxsIn1IdIQWmk23wVbi_JCnzkyHC6FnkpF_5CsSrihkSULRXS0wDwBt57ENelMmNsKa32I6oXA3X8WFj7BKmQ4MoKyMoIFFS4uvs3vipyVsJYRbVd2izc-gzG6q9oA-Dl0Euw-SMWJpfDDlgpZ-130RinxqEHVNU';

// var credentials = {
//   clientId: "7036c52f08d242369375a29b79455c12",
//   clientSecret: "5f483648af8242818f89750f3298d62c",

//   accessToken: code,
// };
// var spotifyApi = new SpotifyWebApi(credentials);

@Injectable()
export class SearchService {
  // spotifyApi;
  //   .getPlaylistTracks("3ktAYNcRHpazJ9qecm3ptn", {
  //     offset: 1,
  //     limit: 5,
  //     fields: "items",
  //   })
  //   .then(
  //     function (data) {
  //       console.log(
  //         "The playlist contains these tracks",
  //         data.body.items.forEach((element) => {
  //           console.log(element);
  //         })
  //       );
  //     },
  //     function (err) {
  //       console.log("Something went wrong!", err);
  //     }
  //   );
}
