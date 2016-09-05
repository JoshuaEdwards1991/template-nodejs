import validate from 'validate-npm-package-name';

const sentenceLikeString = function sentenceLikeString(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}.`;
};

export function validateName(name) {
  const validName = validate(name);

  if (validName.validForNewPackages) return true;
  else if (validName.errors) return sentenceLikeString(validName.errors[0]);
  else if (validName.warnings) return sentenceLikeString(validName.warnings[0]);

  return 'Name is invalid.';
}
