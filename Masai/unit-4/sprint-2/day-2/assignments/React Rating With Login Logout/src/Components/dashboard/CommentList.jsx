// import React from "react";
// import Comment from "./Comment";

// const CommentList = ({ data }) => {
//   return (
//     <>
//       {data.map((item) => (
//         <Comment key={item.id} title={item.title} color={item.color} rating={item.rating} />
//       ))}
//     </>
//   );
// };

// export default CommentList;
import React from "react";
import Comment from "./Comment";

const CommentList = ({ data }) => {
  const handleDelete = (id) => {
    // Implement the delete functionality here
    console.log("Delete comment with id:", id);
  };

  return (
    <>
      {data.map((item) => (
        <Comment
          key={item.id}
          title={item.title}
          color={item.color}
          rating={item.rating}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </>
  );
};

export default CommentList;
