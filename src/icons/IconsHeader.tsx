export const IconBook = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M8 16q.425 0 .713-.288T9 15V5q0-.425-.288-.712T8 4t-.712.288T7 5v10q0 .425.288.713T8 16m-2 6q-1.25 0-2.125-.875T3 19V5q0-1.25.875-2.125T6 2h9q.825 0 1.413.588T17 4v12q0 .825-.587 1.413T15 18H6q-.425 0-.712.288T5 19t.288.713T6 20h13V5q0-.425.288-.712T20 4t.713.288T21 5v15q0 .825-.587 1.413T19 22z"
      ></path>
    </svg>
  );
};

export const IconMoon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className="icon"
    >
      <path
        fill="currentColor"
        d="M12.058 20q-3.334 0-5.667-2.333T4.058 12q0-3.039 1.98-5.27t4.904-2.634q.081 0 .159.006t.153.017q-.506.706-.801 1.57T10.158 7.5q0 2.667 1.866 4.533t4.534 1.867q.951 0 1.813-.295t1.548-.801q.012.075.017.153t.006.159q-.384 2.923-2.615 4.903T12.057 20m0-1q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.074 0-5.237-2.162T9.158 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5.058 12q0 2.9 2.05 4.95t4.95 2.05m-.25-6.75"
      ></path>
    </svg>
  );
};
export const IconSun = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className="icon"
    >
      <path
        fill="currentColor"
        d="M11.5 3.385V2q0-.213.144-.356t.357-.144t.356.144T12.5 2v1.385q0 .212-.144.356t-.357.144t-.356-.144t-.143-.356M11.5 22v-1.384q0-.213.144-.357t.357-.143t.356.143t.143.357V22q0 .213-.144.356t-.357.144t-.356-.144T11.5 22M22 12.5h-1.384q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143H22q.213 0 .356.144t.144.357t-.144.356T22 12.5m-18.615 0H2q-.213 0-.356-.144t-.144-.357t.144-.356T2 11.5h1.385q.212 0 .356.144t.144.357t-.144.356t-.356.143m16.019-7.19l-.735.734q-.14.14-.341.15t-.37-.16q-.156-.155-.159-.346q-.003-.192.157-.357l.74-.74q.14-.147.344-.156t.37.156t.162.359t-.168.36M6.044 18.67l-.74.74q-.14.146-.344.156q-.204.009-.37-.156q-.165-.166-.162-.36t.168-.36l.735-.734q.14-.14.341-.15t.37.16q.156.155.159.347q.003.19-.157.356m12.647.735l-.735-.735q-.14-.14-.15-.341t.16-.37q.155-.156.347-.159q.19-.003.356.157l.74.74q.147.14.157.345q.009.203-.156.369q-.166.165-.36.162t-.36-.168M5.33 6.044l-.74-.74q-.146-.14-.155-.344t.156-.37t.359-.162t.36.168l.734.735q.14.14.15.341t-.16.37q-.155.156-.346.159q-.192.003-.357-.157M12.005 17q-2.082 0-3.544-1.457T7 12.005T8.457 8.46T11.995 7t3.544 1.457T17 11.995t-1.457 3.544T12.005 17M12 16q1.675 0 2.838-1.162T16 12t-1.162-2.838T12 8T9.162 9.163T8 12t1.163 2.838T12 16m0-4"
      ></path>
    </svg>
  );
};

interface IconPlayProps {
  color: string;
}

export const IconPlay = ({ color }: IconPlayProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="m10.939 14.98l3.836-2.47q.292-.183.292-.508t-.292-.512l-3.837-2.47q-.298-.212-.618-.037t-.32.546v4.942q0 .371.32.546t.618-.036M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
      ></path>
    </svg>
  );
};
