export default function getListStudentIds(studentlist) {
  if (!Array.isArray(studentlist)) {
    return [];
  }

  const indexlist = [];
  for (let index = 0; index < studentlist.length; index += 1) {
    indexlist.push(studentlist[index].id);
  }
  return indexlist;
}
