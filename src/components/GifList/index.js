import Gif from "../Gif";
import { useGifs } from "../../hooks/useGifs";
import useNearElement from "../../hooks/useNearElement";
import { useCallback, useEffect, useRef } from "react";
import debounce from "just-debounce-it";

const GifList = ({ search }) => {
  const { loading, gifs, setPage } = useGifs(search);
  const externalRef = useRef();
  const { show } = useNearElement({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const handleNextPage = useCallback(
    debounce(() => {
      setPage((p) => p + 1)
    }, 500),
    []
  );

  useEffect(
    function () {
      if (show) handleNextPage();
    },
    [handleNextPage, show]
  );

  return (
    <div className="grid">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {gifs.map((img) => (
            <Gif key={img.id} gif={img} />
          ))}
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </div>
  );
};

export default GifList;
