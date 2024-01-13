export function aaa00(name, years) {
  console.log(`00 ${name}.`, ` ${years}th.`);
  return 'aaa-00';
}

export function aaa01(name, years) {
  console.log(`01 ${name}.`, ` ${years}th.`);
  name[name.length] = 'ccc003';
  return name;
}

export function aaa02(datas, aaa) {
  console.log(`02 ${datas}.`, ` ${aaa}th.`);
  var tmpstr = 'helloworld';
  var uint8buf = Uint8Array.from(tmpstr.split("").map(x=>x.charCodeAt()));
  return uint8buf;
}
