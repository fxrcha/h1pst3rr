const filterAlbum = (name: string) => {
  name = name.replace('Deluxe', '');
  name = name.replace('Edition', '');
  name = name.replace('Expanded', '');
  name = name.replace('(', '');
  name = name.replace(')', '');
  return name;
};

export default filterAlbum;
