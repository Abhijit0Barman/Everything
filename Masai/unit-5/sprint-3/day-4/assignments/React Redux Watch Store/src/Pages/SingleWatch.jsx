import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleWatch = () => {
  const { id } = useParams();
  const watch = useSelector((state) => state.app.watchData.find((w) => w.id === id));

  if (!watch) {
    return <div>Watch not found</div>;
  }

  return (
    <div>
      <h2>{watch.name}</h2>
      <div>
        <img src={watch.image} alt={watch.name} />
      </div>
      <div>
        <div>Category: {watch.category}</div>
        {/* Add more watch details as needed */}
      </div>
    </div>
  );
};

export default SingleWatch;


/*import React from "react";

const SingleWatch = () => {
  return (
    <div>
      <h2>Watch name</h2>
      <div>
        <img src="watch-image" alt="Cover Pic" />
      </div>
      <div>
        <div>Watch Category</div>
      </div>
    </div>
  );
};

export default SingleWatch;
*/