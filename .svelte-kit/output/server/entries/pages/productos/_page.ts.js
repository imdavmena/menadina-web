const prerender = false;
const load = ({ url }) => {
  return {
    categoryParam: url.searchParams.get("category") ?? "all"
  };
};
export {
  load,
  prerender
};
