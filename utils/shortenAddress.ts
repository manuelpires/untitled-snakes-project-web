const shortenAddress = (hex: string, length = 4) => {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
};

export default shortenAddress;
