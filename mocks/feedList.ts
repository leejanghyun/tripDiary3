import { Location } from '@/utils/map'

export type Feed = {
  id: number
  content: string,
  date: Date[],
  fileList: string[],
  imageDescription: string[],
  location: Location,
  searchText: string,
  title: string,
}

export const feedListMock: Feed[] = [
  {
    id: 1,
    content: '다음 사진은 방콕에서 먹었던 사진 입니다.다음 사진은 방콕에서 먹었던 사진 입니다.',
    date: [new Date(), new Date()],
    fileList: [
      'https://www.codeproject.com/script/Membership/Images/octicons_github-lg.png',
    ],
    imageDescription: ['imageDescription'],
    location: {
      lat: 37.22,
      lng: 126,
    },
    searchText: 'searchText',
    title: 'title',
  },
  {
    id: 2,
    content: '다음 사진은 방콕에서 먹었던 사진 입니다.다음 사진은 방콕에서 먹었던 사진 입니다.',
    date: [new Date(), new Date()],
    fileList: ['https://www.svgrepo.com/show/302636/map-marker.svg'],
    imageDescription: ['imageDescription'],
    location: {
      lat: 37,
      lng: 126.9780,
    },
    searchText: 'searchText',
    title: 'title',
  },
  {
    id: 3,
    content: '다음 사진은 방콕에서 먹었던 사진 입니다.다음 사진은 방콕에서 먹었던 사진 입니다.',
    date: [new Date(), new Date()],
    fileList: [
      'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg',
      'https://www.svgrepo.com/show/302636/map-marker.svg',
      'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg',
      'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg',
      'https://www.svgrepo.com/show/302636/map-marker.svg',
      'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg',
    ],
    imageDescription: ['imageDescription'],
    location: {
      lat: 37.22,
      lng: 126,
    },
    searchText: 'searchText',
    title: 'title',
  },
  {
    id: 4,
    content: '다음 사진은 방콕에서 먹었던 사진 입니다.다음 사진은 방콕에서 먹었던 사진 입니다.',
    date: [new Date(), new Date()],
    fileList: [
      'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg',
      'https://www.svgrepo.com/show/302636/map-marker.svg',
    ],
    imageDescription: ['imageDescription'],
    location: {
      lat: 37,
      lng: 126.9780,
    },
    searchText: 'searchText',
    title: 'title',
  },
  {
    id: 5,
    content: '다음 사진은 방콕에서 먹었던 사진 입니다.다음 사진은 방콕에서 먹었던 사진 입니다.',
    date: [new Date(), new Date()],
    fileList: ['https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg'],
    imageDescription: ['imageDescription'],
    location: {
      lat: 37.22,
      lng: 126,
    },
    searchText: 'searchText',
    title: 'title',
  },
  {
    id: 6,
    content: 'content',
    date: [new Date(), new Date()],
    fileList: [
      'https://codeproject.freetls.fastly.net/App_Themes/CodeProject/Img/logo250x135.gif',
      'https://www.codeproject.com/script/Membership/Images/octicons_github-lg.png',
    ],
    imageDescription: ['imageDescription'],
    location: {
      lat: 37,
      lng: 126.9780,
    },
    searchText: 'searchText',
    title: 'title',
  },
  {
    id: 7,
    content: 'content',
    date: [new Date(), new Date()],
    fileList: ['https://www.codeproject.com/script/Membership/Images/microsoft-lg.png'],
    imageDescription: ['imageDescription'],
    location: {
      lat: 37.22,
      lng: 126,
    },
    searchText: 'searchText',
    title: 'title',
  },
  {
    id: 8,
    content: 'content',
    date: [new Date(), new Date()],
    fileList: ['https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg'],
    imageDescription: ['imageDescription'],
    location: {
      lat: 37,
      lng: 126.9780,
    },
    searchText: 'searchText',
    title: 'title',
  },
  {
    id: 9,
    content: 'content',
    date: [new Date(), new Date()],
    fileList: ['https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg'],
    imageDescription: ['imageDescription'],
    location: {
      lat: 37,
      lng: 126.9780,
    },
    searchText: 'searchText',
    title: 'title',
  },
  {
    id: 10,
    content: 'content',
    date: [new Date(), new Date()],
    fileList: ['https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg'],
    imageDescription: ['imageDescription'],
    location: {
      lat: 37.22,
      lng: 126,
    },
    searchText: 'searchText',
    title: 'title',
  },
  {
    id: 11,
    content: 'content',
    date: [new Date(), new Date()],
    fileList: ['https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg'],
    imageDescription: ['imageDescription'],
    location: {
      lat: 37,
      lng: 126.9780,
    },
    searchText: 'searchText',
    title: 'title',
  },
]
