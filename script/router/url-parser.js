function getPathname() {
  return location.hash.replace("#", "") || "/";
}

function extractPathname(pathname) {
  const splitPath = pathname.split("/");

  return {
    resource: splitPath[1] || null,
    id: splitPath[2] || null,
  };
}

function constructSegmentPathname(segment) {
  let pathname = "";

  if (segment.resource) {
    pathname = pathname.concat(`/${segment.resource}`);
  }

  if (segment.id) {
    pathname = pathname.concat(`/:id`);
  }

  return pathname || "/";
}
  
export default function getActivePathname() {
  const path = getPathname();
  const segment = extractPathname(path);
  return constructSegmentPathname(segment);
}
