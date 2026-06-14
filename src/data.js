// All invitation content, taken from the real invitation_letter.pdf
// (Pernikahan of Ilyas & Laily).
const A = '/assets'

export const wedding = {
  language: 'id',

  // Wishes & prayers are sent here via WhatsApp (+62 853-2058-0043).
  whatsapp: '6285320580043',

  cover: {
    eventName: 'The Wedding of',
    nicknameGroom: 'Ilyas',
    nicknameBride: 'Laily',
    photoDesktop: `${A}/couple-4.jpeg`,
    photoMobile: `${A}/couple-4.jpeg`,
  },

  quotes: {
    description:
      'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, agar kamu merasa tenteram kepadanya. Dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.',
    source: 'Surat Ar-Rum: 21',
  },

  couple: {
    bride: {
      fullName: 'Laily Rahma Damayanti',
      info: 'Putri dari Bapak Yudhi Prastyono\n& Ibu Sumartini\nBugel Kidul — Pasuruan',
      instagram: '',
      photo: '',
    },
    groom: {
      fullName: 'M. Ilyas Dharma Maulana',
      info: "Putra dari Bapak Jumi'an\n& Ibu Ika Sulastri\nRondokuning, Kraksaan — Probolinggo",
      instagram: '',
      photo: '',
    },
  },

  events: [
    {
      title: 'Pernikahan',
      startTime: '2026-07-22 07:30:00',
      endTime: '', // "Selesai" — no closing time on the invitation
      area: 'WIB',
      location:
        "Kediaman Bapak Jumi'an / Ibu Ika Sulastri\nRondokuning, Kraksaan\nProbolinggo, Jawa Timur",
      map: 'https://www.google.com/maps/search/?api=1&query=Rondokuning+Kraksaan+Probolinggo',
    },
  ],

  // Countdown anchors to the event.
  eventDate: '2026-07-22 07:30:00',

  rsvpEvents: [{ name: 'Pernikahan', maxAttendee: 2 }],

  // Real couple photos from the pre-wedding shoot.
  galleryPhotos: [
    `${A}/couple-1.jpeg`,
    `${A}/couple-2.jpeg`,
    `${A}/couple-3.jpeg`,
    `${A}/couple-4.jpeg`,
  ],
}

export const assets = {
  openingBgDesktop: `${A}/texture-bg-link-cover2x-vovU8fK-o.png`,
  openingBgMobile: `${A}/texture-bg-link-cover-mobile2x-p-SHG0Mx8.png`,
  openingOrnament: `${A}/opening_patter-T9LUBQoZ_.png`,
  shapeAnd: `${A}/shape2x-1-1pkDJE1aQ.png`,
  shapeAnd2: `${A}/shape2x-2-LnZJhZjWI.png`,

  coverBgDesktop: `${A}/bg-cover-dalam2x-9tY6ybWNX.png`,
  coverBgMobile: `${A}/mask2xmobileinsidecover-Ay4VuuECG.png`,
  treeLeft: `${A}/pohon-part-to-animate2x-LbfGBjERH.png`,
  treeRight: `${A}/pohon-part-2-to-animate2x-DgCbYkvNZ.png`,

  quoteContainerDesktop: `${A}/quote2x-qTca-Gaod.png`,
  quoteContainerMobile: `${A}/quote2xmobilequote-6QxHp63Z2.png`,

  brideTopDesktop: `${A}/62x-grJTfC8Nc.png`,
  brideTopMobile: `${A}/62xmobiletopornamentbride-t_LdEqECk.png`,
  brideBottomDesktop: `${A}/72x-PRG54AWHj.png`,
  brideBottomMobile: `${A}/72xmobilebottomornamentbride-tvTr1-jtQ.png`,

  rsvpTree: `${A}/tree2x-ig2y4mO0w.png`,
  rsvpPattern: `${A}/pattern2x-3-qNos38B3m.png`,

  giftTop: `${A}/7-copy2x-R0RvQD2E3.png`,
  giftBottom: `${A}/72x-1-d0_MoLx8l.png`,

  coverPhoto: `${A}/couple-4.jpeg`,
  coverPhotoMobile: `${A}/couple-4.jpeg`,
}
