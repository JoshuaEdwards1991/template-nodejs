const defaultFilters = {
  input: answer => answer.trim(),
};

export function applyDefaultFilters(questions) {
  return questions.map((question) => {
    if (!question.filter && defaultFilters[question.type]) {
      question.filter = defaultFilters[question.type];
    }

    return question;
  });
}
