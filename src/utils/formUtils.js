export function handleChangeInput(input, setInput) {
  return (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
}
