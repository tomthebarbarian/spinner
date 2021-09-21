process.stdout.write('hello from spinner1.js... \rheyyy\n');


const spinArr = ['\r|', '\r/','\r-','\r\\','\r|','\r/','\r-','\r-','\r\\','\r|'];

spinArr.forEach((elem, iter) => {
  setTimeout(() => {
    process.stdout.write(elem + '   ');
  },100 + 200 * iter);
});

