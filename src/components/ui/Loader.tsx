import { Skeleton } from "@mui/material";

const Loader = () => {
  return (<div>
    {[...Array(5)].map((_, i) => (
      <Skeleton key={i} variant="rectangular" width="100%" height={50} className="mb-2" />
    ))}
  </div>)

}
export default Loader;