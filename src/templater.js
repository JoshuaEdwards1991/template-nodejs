export default function templater(questions, files) {
  return JSON.stringify({ files, questions });
}
