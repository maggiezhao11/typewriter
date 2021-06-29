const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 100 * i);

}
setTimeout(() => process.stdout.write('\n'), 100 * sentence.length);