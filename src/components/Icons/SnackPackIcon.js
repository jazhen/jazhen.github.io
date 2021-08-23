import PropTypes from "prop-types";
import React from "react";

const SnackPackIcon = ({ size }) => {
  const sizeToPixels = {
    medium: 32,
    large: 48,
    "x-large": 96,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 23"
      width={sizeToPixels[size]}
      height="auto"
    >
      <path
        fill="#fc8104"
        d="M14.27 4.94c0 .26 0 .32-.03.36-.04.04-.04.04.03.11l.07.07h1.3v.55h-.33c-.3 0-.34 0-.35.04 0 .04 0 .04 0 0-.01-.03-.04-.04-.29-.04h-.28l-.08.08-.08.07v.3c0 .29 0 .31.04.32.06.02.08.07.04.11-.06.07-.05.64.01.7.09.09.54.08.62 0 .08-.09.09-.68 0-.68-.03 0-.04-.02-.03-.05 0-.07.08-.09.11-.04.02.04.07.04.36.04.4 0 .38-.02.38.36 0 .3 0 .31.05.37l.06.05h1.26l.05-.06c.07-.06.07-.07.07-.38 0-.22 0-.31.02-.32.02 0 .02-.03 0-.06-.04-.05-.05-.12-.05-.38v-.32h-.34c-.43 0-.4.04-.4-.4v-.35h-.32c-.43 0-.42 0-.42-.44v-.33h-1.47v.32M9.03 8L9 8.38l-.02.05-.72.03v.36c0 .44.02.41-.42.41h-.33v2.23a16.82 16.82 0 01-.03 2.36c.04.03.05.03.07 0 .03-.03.1-.03.36-.03h.32v-.76l.01-.75h.32c.31.01.33.01.34-.03 0-.03.03-.06.05-.07.04 0 .04-.04.04-.33v-.32h.32c.3 0 .32 0 .33-.05l.07-.07c.05-.02.05-.02.05-.34v-.32h.63l.06-.07c.05-.05.05-.07.05-.38V10h1.47l.02.06c.02.06.03.6 0 .66 0 .03-.09.04-.7.04-.67 0-.68 0-.73.05l-.05.05v2.08l.05.05c.04.04.07.04.36.05h.32v.33c0 .3.01.32.05.37l.06.06h1.02c1.23 0 1.1.05 1.11-.42v-.33h.33c.47-.02.41.24.41-1.91s.05-1.9-.39-1.9c-.38 0-.36.02-.36-.37 0-.41.02-.4-.41-.41l-.32-.02v-.31c0-.3-.01-.32-.07-.37l-.05-.06h-3.6V8m6.04-.26c-.08.08-.08.56 0 .63.08.08.55.08.62 0 .08-.08.07-.56 0-.63-.08-.08-.55-.08-.62 0m-9.88 6.81c0 .04-.07.04-.34.04h-.33v1.5h.32c.43 0 .43 0 .43.45l.01.32.72.02.02.74h.71v-.37l.01-.37h.32c.43-.01.44-.02.44-.4 0-.35 0-.35-.41-.35-.38 0-.36.03-.36-.4 0-.29 0-.36-.03-.36-.04 0-.06-.07-.03-.1.03-.05.09-.04.1.01.01.04.03.05.31.05.41 0 .42 0 .42-.37 0-.36 0-.37-.42-.37-.24 0-.3 0-.31.04-.02.05-.09.04-.1-.02-.01-.04-.03-.04-.7-.04a4.6 4.6 0 01-.78-.02m2.38.85c-.07.08-.07.57 0 .64.07.08.55.07.62 0 .08-.1.08-.54 0-.63-.08-.09-.54-.09-.62 0m-.8 2.61v.37h.3c.42 0 .43 0 .43-.36 0-.37-.02-.38-.42-.38h-.3v.37"
      />
      <path
        fill="#fb2404"
        d="M14.27 4.62c-.01 0-.02.15-.02.33 0 .4.02.4-.41.41l-.32.01v1.1l-.01 1.08-.06.06c-.05.05-.07.05-.36.05-.27 0-.3 0-.34.05l-.04.05-.03-.05c-.04-.05-.04-.05-1.85-.04H9.02L9 8.03c0 .33 0 .34-.06.39l-.06.04h.06c.07-.02.08-.07.09-.45V7.7h3.6l.05.06c.06.05.06.07.07.37v.31l.32.02c.43.01.41 0 .41.4s-.02.38.36.38c.44 0 .39-.25.39 1.9s.06 1.9-.41 1.9h-.32v.34c-.02.47.11.42-1.13.42h-1.01l-.06-.06c-.04-.05-.04-.08-.05-.37v-.32h-.32c-.29-.02-.32-.02-.36-.06l-.05-.05v-2.07l.1-.11h.68c.61 0 .7 0 .7-.04.03-.06.02-.6 0-.66l-.02-.06h-1.46v.31c0 .3 0 .32-.06.38l-.06.07h-.63v.35c-.01.45.02.42-.41.43H9v.36c0 .43.04.4-.4.4h-.35v.75l-.01.75h-.32c-.25 0-.33 0-.35.03-.04.03-.05.03-.08 0-.03-.05-.04-.05 0-.08.03-.03.03-.3.03-2.27V9.23h.33c.24 0 .35-.01.37-.03.04-.03.08-.76.04-.74-.01 0-.02.16-.02.34 0 .43.02.4-.4.41H7.5v2.25L7.5 13.7l-.05.05-.06.06H6.32l-1.06.01-.01.32c0 .44 0 .43-.42.43h-.31l-.01.77v.77h.31c.43 0 .43 0 .43.42l.01.33c.01 0 .02-.14.01-.32 0-.45 0-.45-.43-.45h-.32v-1.5h.33c.28 0 .33 0 .34-.04a13.54 13.54 0 001.13.02l1.06.02.06.05c.06.06.06.07.06.32 0 .36 0 .37-.41.37-.38 0-.36-.03-.36.4 0 .43-.02.4.36.4.4 0 .4 0 .4.36 0 .37 0 .38-.43.39h-.32v.37l-.01.38h-.36l-.35-.01v-.3L6 17.05v.28c-.01.35-.04.33.4.34h.34l.01.38v.37h.33c.28 0 .33 0 .35-.04.02-.03.02-.03.06 0 .04.04.1.04.4.04h.35v-.32c0-.45-.01-.43.42-.44H9v-2.2l.06-.05.05-.05h2.2l2.19-.01v-.36c.02-.44 0-.41.43-.41h.32v-.34c0-.3 0-.34.05-.37.04-.05.07-.05.37-.05H15V9.33l.06-.06.06-.06h2.13v-.33c0-.45-.02-.43.39-.43.22 0 .32-.01.34-.03.03-.03.04-1.4.02-1.48-.02-.03-.07-.04-.34-.04-.29 0-.32 0-.34-.04l-.05-.05c-.02 0-.02.01 0 .04.03.03.03.04 0 .05-.02 0-.02.1-.02.32v.32l-.13.12h-1.25l-.06-.05c-.05-.06-.05-.08-.05-.37 0-.38.03-.36-.38-.36-.41 0-.38-.02-.38.36 0 .42-.01.42-.38.42-.35 0-.34.01-.35-.45l-.03-.7-.01-.33.06-.05.07-.06V5.5l-.08-.08c-.08-.08-.08-.08-.05-.12.04-.04.04-.1.04-.36v-.32h1.47v.33c0 .45-.01.44.42.44h.32v.35c0 .35.01.4.09.4.02 0 .02 0-.02-.05s-.05-.08-.05-.38v-.33l-.33-.01c-.42-.01-.4 0-.42-.43v-.33h-1.48m2.96 1.86v.16c.02-.09.02-.24 0-.33v.17m-3.04 1.26c.06.06.06.07.06.32 0 .38-.02.4-.38.4-.35 0-.36-.01-.36-.4 0-.38 0-.39.36-.39.26 0 .26 0 .32.07m1.5 0c.07.08.08.56 0 .64-.07.08-.54.08-.62 0-.08-.07-.08-.55 0-.63.07-.08.54-.08.61 0m-.74.76c.05.04.06.06.06.32 0 .38 0 .38-.38.38-.37 0-.37 0-.37-.38 0-.37 0-.37.37-.37.25 0 .27 0 .32.05M8.2 13.85c.03.03.04.07.04.33 0 .4 0 .39-.37.39s-.37 0-.37-.38c0-.37 0-.38.38-.38.23 0 .28 0 .32.04m.75.78c.09.08.09.56 0 .66-.1.1-.55.1-.65 0-.1-.1-.1-.56 0-.66.1-.1.56-.1.65 0m-.76.78c.08.09.08.54 0 .63-.07.07-.55.08-.62 0-.07-.07-.07-.56 0-.64.08-.08.54-.08.62.01m-2.24 1.51c.05.05.08.04.05-.02 0-.02-.03-.03-.05-.03-.05 0-.05 0 0 .05m1.49.8c.06.06.06.07.06.31 0 .35-.01.36-.42.36h-.3v-.74h.3c.3 0 .3 0 .36.06"
      />
      <path
        fill="#140404"
        d="M14.23 4.59c-.02.01-.02.12-.02.34 0 .39.02.36-.4.36-.43 0-.38-.14-.4 1.18v1.11l-.32.01a30.69 30.69 0 01-2.24.05H8.97v.33c0 .45.02.43-.42.43h-.32v.33c0 .45.02.43-.43.43h-.34v2.26c0 2.12 0 2.26-.04 2.29-.03.02-.25.03-1.1.03-.62 0-1.07.01-1.09.02-.02.02-.03.1-.04.34 0 .18-.02.35-.03.38l-.03.06-.32.01h-.33v.8l-.01.8h.33c.28 0 .34.01.35.04 0 .02.03.04.05.04.03 0 .03.05.03.34v.34h.34c.29 0 .34.01.34.04 0 .02.01.03.03.03.03 0 .03.06.03.35v.35h.75v.77l.54.01c1.17.04 1.07.08 1.09-.4v-.33h.34c.44-.02.4.11.4-1.18 0-.8 0-1.08.02-1.1.02-.02.54-.03 2.2-.03 1.84 0 2.18 0 2.22-.03.04-.03.05-.07.05-.38l.02-.34.33-.01c.42-.02.4 0 .4-.41 0-.4-.03-.37.37-.37.22 0 .33-.01.35-.03.01-.02.02-.56.02-2.27 0-1.9 0-2.24.03-2.27.03-.03.2-.04 1.09-.04.68 0 1.06 0 1.09-.02.04-.02.04-.05.04-.35 0-.4-.02-.38.35-.38.3 0 .3 0 .36-.07l.06-.06v-.73c0-.9.04-.82-.4-.82-.2 0-.32-.01-.32-.03l-.04-.02c-.02 0-.03-.06-.03-.34V6.1h-.33c-.42 0-.4.02-.42-.42v-.33h-.33c-.44-.01-.43 0-.43-.46v-.33h-.76c-.56 0-.77 0-.79.03m1.52.35c.01.44 0 .42.42.43h.32v.34c.02.45 0 .43.43.43h.33v.32c0 .45 0 .44.42.44.27 0 .31.01.33.04.02.08.01 1.45-.02 1.48-.02.02-.12.03-.34.03-.41 0-.4-.02-.4.43v.33h-2.12l-.06.06-.06.06v4.48h-.33c-.3 0-.33 0-.37.05-.05.03-.05.07-.05.37v.34h-.32c-.43 0-.4-.03-.42.41l-.01.36h-2.2l-2.2.01-.04.05-.05.05-.01 1.1v1.1h-.34c-.43 0-.42 0-.42.44v.32h-.35c-.3 0-.36 0-.4-.04-.04-.03-.04-.03-.06 0-.02.04-.07.04-.35.04h-.33v-.75h-.36c-.43-.01-.4.02-.4-.38.01-.42.03-.4-.4-.4l-.33-.02-.01-.32c-.02-.45 0-.43-.43-.43H4.5v-.77l.02-.76h.3c.43-.01.42 0 .43-.44v-.32h1.07l1.07-.01.06-.06.05-.05V9.22h.33c.43-.02.4 0 .42-.43v-.33l.33-.01c.28-.01.34-.02.37-.06.04-.03.05-.1.05-.37l.02-.34 1.8-.01c1.82 0 1.82 0 1.86.04l.03.05.04-.05c.04-.04.07-.05.34-.05.29 0 .3 0 .36-.05l.06-.06V6.46l.01-1.08.32-.02c.43-.01.41 0 .41-.41 0-.18 0-.33.02-.33l.75-.01h.73v.33m-2.2 2.78c-.04.06-.04.08-.04.33 0 .39.01.4.36.4.36 0 .38-.02.38-.4 0-.37-.02-.39-.38-.39-.25 0-.26 0-.31.06m.59.05c.03.01.03.06.03.29 0 .32.03.3-.34.29h-.25V7.77c0-.03.48-.04.56-.01m.15.73c-.05.05-.05.08-.05.32 0 .38 0 .38.37.38s.38 0 .38-.38c0-.37 0-.37-.38-.37-.25 0-.27 0-.32.05m.6.04c.02.02.03.12.03.28 0 .33 0 .32-.3.32-.32 0-.31 0-.31-.32 0-.16 0-.26.03-.28.03-.04.51-.04.55 0m-7.35 5.33c-.05.05-.05.08-.05.32 0 .37 0 .38.38.38.37 0 .36 0 .36-.39 0-.38.01-.37-.36-.37-.27 0-.28 0-.33.06m.61.06v.56h-.27c-.18.01-.27 0-.3-.02a1.39 1.39 0 010-.55s.02-.01.02-.03c0-.03.05-.03.27-.03h.27l.01.07m.14.7c-.1.1-.1.57 0 .66.1.1.55.1.65 0 .09-.1.09-.58 0-.66-.1-.1-.56-.1-.65 0m.6.05c.03 0 .04.05.04.28 0 .33.02.3-.35.3l-.25-.01v-.27-.29c.01-.03.49-.05.56-.01"
      />
      <path
        fill="#040404"
        d="M13.46 3.76c0 .02-.01.04-.03.04-.03 0-.04.1-.04.72v.73h-.33c-.33 0-.34 0-.34.04 0 .03-.01.05-.04.05-.05 0-.05.02-.05.72v.73H10.8c-1.62 0-1.84 0-1.84.03 0 .02-.01.04-.03.04-.03 0-.04.05-.04.34v.35h-.34c-.32 0-.33 0-.33.04s-.02.05-.05.05c-.04 0-.04.02-.04.34v.35h-.34c-.29 0-.34 0-.34.04 0 .01-.01.03-.03.03-.03 0-.04.05-.04.35v.34h-.33c-.29 0-.34 0-.34.04 0 .01-.01.03-.03.03-.04 0-.04.22-.04 1.89v1.88h-.7c-.62 0-.72 0-.72.04 0 .02-.02.03-.04.03-.04 0-.05.02-.05.35v.35h-.7c-.62 0-.72 0-.72.03 0 .02-.01.03-.03.03-.03 0-.03.15-.03 1.2s0 1.2.03 1.2c.02 0 .03.01.03.03 0 .03.06.04.34.04h.34v.34c0 .3 0 .34.04.34.01 0 .03.02.03.04 0 .03.05.03.34.03h.33v.35c0 .33 0 .35.05.35.03 0 .04.01.04.04 0 .05.02.05.34.05h.34v.34c0 .3 0 .35.03.35.02 0 .03.01.03.03 0 .03.06.04.34.04h.34v.34c0 .3 0 .35.04.35.02 0 .03.01.03.03 0 .03.14.04 1.16.04 1.01 0 1.16 0 1.16-.04 0-.02.02-.03.04-.03.05 0 .05-.02.05-.73v-.72h.34c.32 0 .33 0 .33-.05 0-.02.02-.04.04-.04.03 0 .03-.1.03-.73v-.72h1.84c1.54 0 1.83-.01 1.83-.04l.04-.04c.05-.01.05-.03.05-.35v-.34h.33c.3 0 .33 0 .34-.04 0-.03.03-.04.04-.04.03 0 .03-.07.03-.35v-.35h.34c.29 0 .34 0 .34-.03 0-.02.01-.04.03-.04.03 0 .04-.05.04-.34v-.35h.34c.27 0 .33 0 .33-.03 0-.02.02-.03.05-.04.04-.01.04-.03.04-1.9v-1.87h.71c.62 0 .7 0 .7-.03 0-.02.02-.04.04-.04.03 0 .04-.05.04-.35v-.34h.7c.62 0 .72 0 .72-.03 0-.02.02-.04.04-.04.05 0 .05-.01.05-1.2 0-1.18 0-1.2-.05-1.2-.02 0-.04 0-.04-.03s-.06-.03-.34-.03h-.34v-.34c0-.3 0-.35-.03-.35-.02 0-.03-.02-.03-.04s-.06-.03-.34-.03h-.34v-.35c0-.29 0-.34-.04-.34-.02 0-.03-.02-.03-.05 0-.04-.01-.04-.34-.04h-.33V4.9c0-.28-.01-.34-.03-.34-.02 0-.04-.02-.05-.04-.01-.03-.07-.03-.34-.03h-.33v-.35c0-.33 0-.34-.04-.34-.03 0-.05-.02-.05-.04 0-.03-.14-.03-1.16-.03-1.01 0-1.16 0-1.16.03m2.32 1.13c0 .46 0 .45.43.45l.33.01v.33c.01.44 0 .42.42.42h.33v.35c0 .28 0 .34.03.34l.04.02c0 .02.12.03.32.03.44 0 .4-.09.4.82v.73l-.06.06c-.06.07-.07.07-.36.07-.37 0-.35-.03-.35.38 0 .3 0 .33-.04.35-.03.02-.41.02-1.1.02-.87 0-1.05.01-1.08.04-.02.03-.03.36-.03 2.27 0 1.71 0 2.25-.02 2.27-.02.02-.13.03-.35.03-.4 0-.37-.02-.37.37 0 .42.02.4-.4.41l-.33.01-.02.34c0 .3-.01.35-.05.38-.04.02-.38.03-2.22.03-1.66 0-2.18 0-2.2.03-.02.02-.03.3-.03 1.1 0 1.3.05 1.16-.4 1.17l-.33.01v.32c-.02.49.08.45-1.09.41l-.54-.01v-.77h-.75v-.35c0-.3 0-.35-.03-.35a.04.04 0 01-.03-.03c0-.03-.05-.04-.34-.04h-.34v-.34c0-.3 0-.34-.03-.34-.02 0-.04-.02-.05-.04-.01-.03-.07-.03-.35-.03h-.33v-1.6h.34l.32-.02.03-.06c.01-.03.03-.2.03-.38 0-.25.02-.32.04-.34.02-.01.47-.02 1.1-.02.84 0 1.06-.01 1.1-.03.03-.03.03-.17.03-2.3V9.17h.34c.45 0 .43.02.43-.43V8.4h.32c.44 0 .42.02.42-.43v-.33h1.9a30.69 30.69 0 002.23-.05h.32V6.46c.02-1.32-.03-1.18.4-1.18.42 0 .4.03.4-.36 0-.22 0-.33.02-.34.02-.03.23-.03.79-.03h.76v.33m-2.2 2.9v.55h.26c.37.02.34.04.34-.28 0-.23 0-.28-.03-.29a1.75 1.75 0 00-.56.02m.76.75c-.02.02-.03.12-.03.28 0 .33-.01.32.3.32.32 0 .3 0 .3-.32 0-.16 0-.26-.02-.28a1.3 1.3 0 00-.55 0M7.6 13.9c0 .02-.01.03-.02.03-.04 0-.03.52 0 .55.03.02.12.03.3.02h.27v-.24-.32l-.01-.07h-.27c-.22 0-.27 0-.27.03m.73.8v.56h.25c.37.02.35.04.35-.29 0-.23 0-.27-.04-.28a1.65 1.65 0 00-.56.01"
      />
    </svg>
  );
};

SnackPackIcon.propTypes = {
  size: PropTypes.string,
};

SnackPackIcon.defaultProps = {
  size: "medium",
};

export default SnackPackIcon;