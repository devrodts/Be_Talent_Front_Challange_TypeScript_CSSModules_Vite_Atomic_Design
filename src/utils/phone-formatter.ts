export const phoneFormatter = (phone: string): string | null => {
  
  const cleaned = phone.replace(/\D/g, "");
  const hasCountryCode = cleaned.startsWith("55");
  const numberWithoutCountryCode = hasCountryCode ? cleaned.slice(2) : cleaned;
  const ddd = numberWithoutCountryCode.slice(0, 2);
  const firstDigit = numberWithoutCountryCode.slice(2, 3);
  const mainNumber = numberWithoutCountryCode.slice(3);
  
  const formattedNumber = `+55 (${ddd}) ${firstDigit} ${mainNumber.slice(0, 4)}-${mainNumber.slice(4)}`;
  
  return formattedNumber;
};
