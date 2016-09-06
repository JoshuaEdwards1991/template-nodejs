import licenseValidation from 'validate-npm-package-license';
import packageNameValidation from 'validate-npm-package-name';
import semverValidation from 'semver';

const sentenceLikeString = function sentenceLikeString(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}.`;
};

export function validateLicense(license) {
  const validationResult = licenseValidation(license);
  if (validationResult.spdx || validationResult.unlicensed) return true;

  let suggestion = '';
  if (validationResult.warnings && validationResult.warnings[1]) {
    suggestion = ` Did you mean "${validationResult.warnings[1].split('"')[1]}"?`;
  }

  return `Must be a SPDX license identifier or "UNLICENSED".${suggestion}`;
}

export function validateName(name) {
  const validationResult = packageNameValidation(name);

  if (validationResult.validForNewPackages) return true;
  else if (validationResult.errors) return sentenceLikeString(validationResult.errors[0]);
  else if (validationResult.warnings) return sentenceLikeString(validationResult.warnings[0]);

  return 'Name is invalid.';
}

export function validateVersion(version) {
  return semverValidation.valid(version)
    ? true
    : 'Invalid semantic version (semver).';
}
