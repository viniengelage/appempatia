import * as React from "react"
import Svg, { G, Path, Defs, LinearGradient, Stop, SvgProps } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={390}
      height={448}
      viewBox="0 0 390 448"
      fill="none"
      {...props}
    >
      <G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M411 375l-17-12.596c-17-13.856-52-39.048-86-49.125-34-11.337-68-6.298-103 5.038-34 10.077-68 25.193-102 35.27-35 11.336-69 16.375-86 18.894L0 375v-93.212h411V375z"
          fill="url(#paint0_linear_315_2)"
        />
        <Path d="M0-18h411v299.788H0V-18z" fill="url(#paint1_linear_315_2)" />
      </G>
      <Path
        d="M156.73 57.152c0 1.952-.448 3.744-1.344 5.376-.896 1.6-2.272 2.896-4.128 3.888-1.856.992-4.16 1.488-6.912 1.488h-5.088V80h-8.208V46.304h13.296c2.688 0 4.96.464 6.816 1.392 1.856.928 3.248 2.208 4.176 3.84.928 1.632 1.392 3.504 1.392 5.616zm-13.008 4.224c1.568 0 2.736-.368 3.504-1.104.768-.736 1.152-1.776 1.152-3.12s-.384-2.384-1.152-3.12c-.768-.736-1.936-1.104-3.504-1.104h-4.464v8.448h4.464zm39.937 12.672h-12.576L169.067 80h-8.592l12.192-33.696h9.504L194.363 80h-8.688l-2.016-5.952zm-2.112-6.336l-4.176-12.336-4.128 12.336h8.304zm42.447-21.408v6.576h-8.928V80h-8.208V52.88h-8.928v-6.576h26.064zm34.983 0V80h-8.208V66.128h-12.768V80h-8.208V46.304h8.208v13.2h12.768v-13.2h8.208z"
        fill="#F2F2F2"
      />
      <Path
        d="M110.123 101.012h-5.724L103.301 104h-1.332l4.59-12.42h1.422l4.572 12.42h-1.332l-1.098-2.988zm-.378-1.044l-2.484-6.804-2.484 6.804h4.968zM127.47 104l-3.114-5.256h-2.322V104h-1.26V91.418h3.78c1.404 0 2.466.336 3.186 1.008.732.672 1.098 1.554 1.098 2.646 0 .912-.264 1.692-.792 2.34-.516.636-1.284 1.05-2.304 1.242l3.24 5.346h-1.512zm-5.436-6.282h2.538c.984 0 1.722-.24 2.214-.72.504-.48.756-1.122.756-1.926 0-.828-.24-1.464-.72-1.908-.48-.456-1.236-.684-2.268-.684h-2.52v5.238zm15.587 6.408c-1.164 0-2.22-.27-3.168-.81a6.053 6.053 0 01-2.25-2.286c-.54-.984-.81-2.094-.81-3.33 0-1.236.27-2.34.81-3.312a5.887 5.887 0 012.25-2.286c.948-.552 2.004-.828 3.168-.828 1.176 0 2.238.276 3.186.828a5.764 5.764 0 012.232 2.286c.54.972.81 2.076.81 3.312 0 1.236-.27 2.346-.81 3.33a5.923 5.923 0 01-2.232 2.286c-.948.54-2.01.81-3.186.81zm0-1.098c.936 0 1.776-.216 2.52-.648.744-.432 1.332-1.05 1.764-1.854.432-.816.648-1.758.648-2.826s-.216-2.004-.648-2.808c-.432-.804-1.02-1.422-1.764-1.854-.744-.432-1.584-.648-2.52-.648-.936 0-1.776.216-2.52.648-.744.432-1.332 1.05-1.764 1.854-.432.804-.648 1.74-.648 2.808 0 1.068.216 2.01.648 2.826.432.804 1.02 1.422 1.764 1.854.744.432 1.584.648 2.52.648zm16.453-2.016h-5.724L147.252 104h-1.332l4.59-12.42h1.422l4.572 12.42h-1.332l-1.098-2.988zm-.378-1.044l-2.484-6.804-2.484 6.804h4.968zm9.186-8.55c1.392 0 2.586.252 3.582.756a5.278 5.278 0 012.286 2.178c.528.948.792 2.076.792 3.384 0 1.296-.264 2.418-.792 3.366-.528.936-1.29 1.656-2.286 2.16-.996.492-2.19.738-3.582.738h-3.726V91.418h3.726zm0 11.538c1.752 0 3.084-.456 3.996-1.368.924-.924 1.386-2.208 1.386-3.852 0-1.656-.462-2.946-1.386-3.87-.912-.936-2.244-1.404-3.996-1.404h-2.466v10.494h2.466zm22.545-11.538v1.044h-3.492V104h-1.26V92.462h-3.51v-1.044h8.262zm8.271 12.708c-1.164 0-2.22-.27-3.168-.81a6.053 6.053 0 01-2.25-2.286c-.54-.984-.81-2.094-.81-3.33 0-1.236.27-2.34.81-3.312a5.887 5.887 0 012.25-2.286c.948-.552 2.004-.828 3.168-.828 1.176 0 2.238.276 3.186.828a5.764 5.764 0 012.232 2.286c.54.972.81 2.076.81 3.312 0 1.236-.27 2.346-.81 3.33a5.923 5.923 0 01-2.232 2.286c-.948.54-2.01.81-3.186.81zm0-1.098c.936 0 1.776-.216 2.52-.648.744-.432 1.332-1.05 1.764-1.854.432-.816.648-1.758.648-2.826s-.216-2.004-.648-2.808c-.432-.804-1.02-1.422-1.764-1.854-.744-.432-1.584-.648-2.52-.648-.936 0-1.776.216-2.52.648-.744.432-1.332 1.05-1.764 1.854-.432.804-.648 1.74-.648 2.808 0 1.068.216 2.01.648 2.826.432.804 1.02 1.422 1.764 1.854.744.432 1.584.648 2.52.648zm15.993-10.584v4.698h4.77v1.044h-4.77v4.77h5.31V104h-6.57V91.4h6.57v1.044h-5.31zm20.717-.864V104h-1.26v-9.918L224.72 104h-.918l-4.428-9.882V104h-1.26V91.58h1.332l4.806 10.764 4.806-10.764h1.35zm11.535 3.456c0 1.08-.354 1.95-1.062 2.61-.708.66-1.77.99-3.186.99h-2.538V104h-1.26V91.418h3.798c1.404 0 2.46.33 3.168.99.72.66 1.08 1.536 1.08 2.628zm-4.248 2.52c1.968 0 2.952-.84 2.952-2.52 0-.84-.234-1.476-.702-1.908-.468-.432-1.218-.648-2.25-.648h-2.538v5.076h2.538zm14.282 3.456h-5.724L245.155 104h-1.332l4.59-12.42h1.422l4.572 12.42h-1.332l-1.098-2.988zm-.378-1.044l-2.484-6.804-2.484 6.804h4.968zm12.822-8.55v1.044h-3.492V104h-1.26V92.462h-3.51v-1.044h8.262zm11.961 0V104h-1.26v-5.886H268.3V104h-1.26V91.418h1.26v5.652h6.822v-5.652h1.26zm11.821 0l-4.032 7.686V104h-1.26v-4.896l-4.068-7.686h1.422l3.276 6.534 3.258-6.534h1.404z"
        fill="#fff"
      />
      <Path
        d="M299.787 181.697s-35.716-31.941-85.964-24.734c-50.247 7.207-89.513 46.161-122.163 76.877C59.009 264.556 54 307.293 78.25 337.58c24.251 30.287 55.677 13.01 99.918 29.57 44.242 16.559 53.508 27.69 99.669 17.464 46.16-10.226 76.003-66.651 64.599-122.047-11.403-55.395-42.65-80.87-42.65-80.87z"
        fill="#BD6AF0"
      />
      <Path
        opacity={0.8}
        d="M299.787 181.697s-35.716-31.941-85.964-24.734c-50.247 7.207-89.513 46.161-122.163 76.877C59.009 264.556 54 307.293 78.25 337.58c24.251 30.287 55.677 13.01 99.918 29.57 44.242 16.559 53.508 27.69 99.669 17.464 46.16-10.226 76.003-66.651 64.599-122.047-11.403-55.395-42.65-80.87-42.65-80.87z"
        fill="#fff"
      />
      <Path
        d="M306.043 284.002c-3.542-1.927-5.156-.32-6.443-1.927s3.549-5.803-6.123-9.992c0 0-.64-9.016-13.853-9.36-13.213-.343-9.664 9.025-13.205 11.279-3.542 2.254-4.509-1.287-8.058.967-3.549 2.255-1.934 6.763-4.828 7.41-2.894.648-6.77-2.901-10.312-.647-3.541 2.254-3.549 4.189-5.155 4.189-1.607 0-4.836-1.287-6.763 0-1.927 1.287-4.189 2.901-4.189 2.901h81.51s.968-2.886-2.581-4.82z"
        fill="#BD6AF0"
      />
      <Path
        opacity={0.5}
        d="M306.043 284.002c-3.542-1.927-5.156-.32-6.443-1.927s3.549-5.803-6.123-9.992c0 0-.64-9.016-13.853-9.36-13.213-.343-9.664 9.025-13.205 11.279-3.542 2.254-4.509-1.287-8.058.967-3.549 2.255-1.934 6.763-4.828 7.41-2.894.648-6.77-2.901-10.312-.647-3.541 2.254-3.549 4.189-5.155 4.189-1.607 0-4.836-1.287-6.763 0-1.927 1.287-4.189 2.901-4.189 2.901h81.51s.968-2.886-2.581-4.82z"
        fill="#fff"
      />
      <Path
        d="M285.076 171.307c-4.945-2.706-7.199-.452-9.001-2.706-1.802-2.254 4.953-8.081-8.557-13.954 0 0-.897-12.605-19.359-13.058-18.463-.452-13.502 12.605-18.455 15.756-4.953 3.152-6.31-1.801-11.255 1.35-4.946 3.151-2.707 9.461-6.755 10.358-4.048.897-9.462-4.056-14.376-.897s-4.953 5.85-7.207 5.85c-2.254 0-6.755-1.802-9.453 0a287.71 287.71 0 00-5.858 4.048h113.88s1.349-4.048-3.604-6.747z"
        fill="#BD6AF0"
      />
      <Path
        opacity={0.5}
        d="M285.076 171.307c-4.945-2.706-7.199-.452-9.001-2.706-1.802-2.254 4.953-8.081-8.557-13.954 0 0-.897-12.605-19.359-13.058-18.463-.452-13.502 12.605-18.455 15.756-4.953 3.152-6.31-1.801-11.255 1.35-4.946 3.151-2.707 9.461-6.755 10.358-4.048.897-9.462-4.056-14.376-.897s-4.953 5.85-7.207 5.85c-2.254 0-6.755-1.802-9.453 0a287.71 287.71 0 00-5.858 4.048h113.88s1.349-4.048-3.604-6.747z"
        fill="#fff"
      />
      <Path
        d="M154.98 228.864c-3.541-1.935-5.156-.32-6.443-1.935-1.287-1.614 3.541-5.795-6.123-9.984 0 0-.647-9.024-13.853-9.36-13.205-.335-9.664 9.025-13.213 11.279-3.549 2.254-4.508-1.287-8.049.967-3.542 2.254-1.935 6.763-4.836 7.41-2.902.648-6.763-2.901-10.312-.647-3.549 2.254-3.541 4.188-5.156 4.188-1.614 0-4.828-1.287-6.762 0-1.935 1.287-4.189 2.902-4.189 2.902h81.494s.983-2.886-2.558-4.82z"
        fill="#BD6AF0"
      />
      <Path
        opacity={0.5}
        d="M154.98 228.864c-3.541-1.935-5.156-.32-6.443-1.935-1.287-1.614 3.541-5.795-6.123-9.984 0 0-.647-9.024-13.853-9.36-13.205-.335-9.664 9.025-13.213 11.279-3.549 2.254-4.508-1.287-8.049.967-3.542 2.254-1.935 6.763-4.836 7.41-2.902.648-6.763-2.901-10.312-.647-3.549 2.254-3.541 4.188-5.156 4.188-1.614 0-4.828-1.287-6.762 0-1.935 1.287-4.189 2.902-4.189 2.902h81.494s.983-2.886-2.558-4.82z"
        fill="#fff"
      />
      <Path
        d="M190.517 375.465h.608c1.225-.047 3.9-.133 4.633-.133.921 0 2.465 2.005 1.077 3.853-1.389 1.849-2.34 4.009-4.314 4.47-1.973.46-1.7 1.7-3.12 3.237-1.419 1.536-5.241 1.856-7.246 1.388-2.004-.468-.156-10.483.156-10.92.312-.437 3.729 1.81 8.206-1.895z"
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M192.521 383.639c2.005-.46 2.925-2.621 4.314-4.469a2.515 2.515 0 00.359-2.543 10.418 10.418 0 01-2.98 4.851c-1.388 1.085-2.465.468-3.237 1.389-.772.92-1.56 2.777-5.554 2.777a15.03 15.03 0 01-4.157-.507c0 1.661.226 2.971.92 3.12 2.005.468 5.858.156 7.247-1.389 1.388-1.544 1.084-2.769 3.088-3.229zM216.881 381.174s-.46 5.554-.156 6.63c.304 1.077 3.393 2.161 5.093 1.849 1.701-.312 4.782-2.465 4.782-2.465s6.786-2.621 9.25-4.165c2.465-1.545 3.237-3.393 1.389-3.853-1.849-.461-8.019-1.701-9.867-2.161-1.849-.46-1.857 1.232-5.866 2.161-4.009.928-4.625 2.004-4.625 2.004z"
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M236.318 381.174a88.753 88.753 0 01-11.255 5.398 11.339 11.339 0 01-8.432.078c-.003.387.031.774.102 1.154.312 1.077 3.393 2.161 5.093 1.849 1.7-.312 4.781-2.465 4.781-2.465s6.786-2.621 9.251-4.165c2.106-1.318 2.972-2.855 2.028-3.565a4.675 4.675 0 01-1.568 1.716v0z"
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M189.713 272.364s-1.755 9.836-2.379 15.351c-.624 5.514-2.09 19.219-2.09 25.779 0 6.559-.406 18.47-.406 18.47s-.6 4.774-1.638 9.087c-1.037 4.313-1.489 12.519-1.341 16.544.148 4.025.148 15.194.148 15.194a30.945 30.945 0 000 3.9c.148 1.49.445 3.276 1.934 3.276 1.49 0 4.173 0 5.219-.889a7.3 7.3 0 002.23-4.922c.149-2.231.78-9.836.897-11.622.117-1.786 5.367-23.837 5.96-28.454.592-4.618.897-7.153.897-7.153l5.506-28.907 1.646.297s9.36 35.162 9.36 37.549c0 2.387-1.045 13.26.148 19.367 1.194 6.108 1.014 26.949 1.014 26.949a4.612 4.612 0 002.231 1.342c1.342.296 5.218-.601 6.708-2.98 1.49-2.379 2.083-6.708 2.083-7.901 0-1.193 1.341-25.623 1.341-31.886 0-6.264-.592-13.853-.592-14.454 0-.6-1.49-28.899-1.935-31.434-.444-2.535-5.514-23.096-5.514-23.096s-15.483 4.618-31.427.593z"
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M176.602 250.462s-1.935 4.922-2.231 7.449c-.297 2.527 1.341 7.152 2.831 8.049 1.49.897 6.404-1.045 7.153-2.238.749-1.194 4.165-8.939 4.165-8.939a23.938 23.938 0 01-11.918-4.321v0z"
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M223.737 253.473l-5.873 26.044h3.829l5.624-26.559-3.58.515z"
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M228.518 232.951s2.808-.507 3.573 0c.764.507.78 3.065.78 4.087 0 1.022-.78 3.83-.507 5.109s4.602 7.316 6.388 11.154c1.786 3.838-.507 9.953-2.551 12.48-2.043 2.527-6.138-6.552-7.417-9.617-1.28-3.066-3.315-21.965-3.315-21.965l3.049-1.248z"
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M233.978 248.847s4.056 6.934 4.205 9.173c.148 2.239-.897 7.02-1.935 8.642-1.037 1.623-3.72.227-5.663-.819a8.576 8.576 0 01-4.024-4.251c-.897-1.934-3.308-6.786-3.308-6.786s6.56-1.786 10.725-5.959z"
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M197.459 219.8a20.4 20.4 0 00-5.359 2.09c-2.535 1.49-6.56 4.47-7.901 6.849-1.342 2.379-5.359 12.667-7.301 16.544-1.942 3.876-2.527 5.21-2.527 5.21s2.34 3.432 5.507 4.774c3.166 1.341 8.642 1.638 8.642 1.638s.78 15.194 1.193 17.433c.414 2.238 5.515 3.572 12.964 3.9 7.449.327 17.878-2.379 19.219-3.9 1.342-1.521-.444-17.433-.444-17.433a46.714 46.714 0 007.152-1.638c2.98-1.046 6.856-6.116 6.856-6.116s-5.366-13.111-6.411-15.342-.297-3.12-4.47-6.108a48.561 48.561 0 00-8.494-4.781s-6.24-2.98-11.474-3.572c-5.233-.593-7.152.452-7.152.452zM219.065 199.52s1.638.897 1.638 1.794-1.786 2.831-1.786 2.831a18.252 18.252 0 010 4.166c-.297 1.489 1.193 3.12 0 4.173-1.194 1.053-4.766 1.045-4.766 1.045l-1.045 6.56-13.409-1.794-.444-4.173s-3.58-2.98-4.774-6.24c-1.193-3.261-1.037-4.173-.78-6.24.258-2.067 2.535-6.412 7.02-7.449a24.373 24.373 0 0111.919.148c3.151.842 6.427 5.179 6.427 5.179zM213.09 209.823v-.038.038z"
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M209.237 213.217a7.806 7.806 0 003.853-3.393c-.055.109-.289.413-1.022.413-.897 0-2.987-1.638-3.58-3.12-.593-1.482.897-3.284 1.934-3.284 1.038 0 2.535 2.091 3.729 1.342 1.193-.749 1.045-4.017 1.045-4.017a22.23 22.23 0 011.342-4.391 10.557 10.557 0 00-3.9-2.465 24.373 24.373 0 00-11.919-.148c-4.469 1.037-6.708 5.358-7.02 7.449-.312 2.09-.444 2.979.78 6.24 1.225 3.26 4.774 6.24 4.774 6.24 2.527.179 7.152.327 9.984-.866z"
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M193.145 221.407s2.676-4.321 4.017-4.914c1.342-.593 11.03-.593 12.964-.297 1.934.297 5.366 2.684 5.959 4.025a574.26 574.26 0 011.045 2.379v.897s-6.403-2.979-12.48-2.979a78.714 78.714 0 00-11.505.889z"
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M217.13 223.497a67.91 67.91 0 01-4.258 7.753 36.386 36.386 0 00-3.9 8.783l4.68.484s3.252-8.58 5.202-11.38a32.594 32.594 0 012.605-3.417s-1.856-2.34-4.329-2.223zM193.145 221.407s-.78 5.46-.436 8.385a52.051 52.051 0 010 7.472l-3.417 1.139s-.975-9.43-.647-11.544c.327-2.114.647-3.572.647-3.572s2.169-1.927 3.853-1.88z"
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M186.203 271.413s-2.269.78-3.12 4.68c-.85 3.9 1.467 8.135 6.178 10.085 4.711 1.95 12.363 2.925 19.5 3.253 7.137.327 13.003-.328 15.6-4.883 2.597-4.555 1.622-9.43-1.466-10.242-3.089-.811-6.506.975-18.369-.163a139.137 139.137 0 01-18.323-2.73v0z"
        fill="#BD6AF0"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M214.892 277.036c-3.003 3.503-3.752 12.012 2.254 12.012h.304c3.12-.624 5.53-1.942 6.966-4.461 2.02-3.541 1.872-7.278.257-9.142l-2.418-1.63a9.616 9.616 0 00-7.363 3.221v0z"
        fill="#BD6AF0"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M218.519 281.623s-.117 2.488 2.831 1.56a3.987 3.987 0 002.496-3.417c.025-.183.038-.368.039-.553.039-1.248-.398-2.34-1.287-2.598-2.043-.569-7.02 3.167-7.02 5.889 0 2.722 3.175 3.627 6.006 1.81 2.832-1.818 3.627-3.736 3.401-8.268"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M186.859 234.831s13.002 1.138 19.999 1.294c6.996.156 10.405-.483 12.48 1.794 2.075 2.278 4.68 26.661 5.85 31.052 1.17 4.392-.78 5.694-5.686 7.48-4.907 1.787-12.683 1.787-21.63 0-8.946-1.786-12.846-3.12-13.821-7.02-.975-3.9-.32-16.426-.32-23.4 0-6.973-.616-11.037 3.128-11.2z"
        fill="#BD6AF0"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M217.598 260.235a25.226 25.226 0 006.006-1.396c-1.248-8.58-2.831-19.438-4.204-20.92-2.114-2.277-5.53-1.63-12.48-1.794-6.95-.163-19.999-1.294-19.999-1.294-3.744.163-3.12 4.227-3.12 11.216 0 2.894-.117 6.724-.172 10.507.921.553 11.599 6.341 33.969 3.681z"
        fill="#BD6AF0"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M186.492 255.766c.21 2.357.147 4.731-.187 7.074a42.56 42.56 0 00-.554 5.952l3.159 1.302s.562-5.023.936-7.254c.255-2.101.38-4.216.374-6.333l-3.728-.741zM210.688 258.02s-.188 3.354-.554 5.772c-.367 2.418-.936 8.143-.936 8.143h3.72s1.303-5.725 1.303-7.956c0-2.231.187-6.146.187-6.146l-3.72.187z"
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M225.227 268.94c-1.139-4.391-3.736-28.774-5.85-31.052a4.725 4.725 0 00-1.116-.873c-1.357.436-3.354 1.513-2.464 3.962 1.302 3.572 2.605 21.138 1.95 26.66-.656 5.523-4.228 8.136-.975 9.431l.179.07a18.893 18.893 0 002.59-.718c4.875-1.755 6.825-3.057 5.686-7.48z"
        fill="#BD6AF0"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M204.611 297.995l-6.372-1.708"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M190.743 192.211s1.802 10.14 1.802 11.318c0 1.178.296 1.49 5.07 1.786 4.773.297 11.318.601 15.046-1.333 3.728-1.935 10.28-6.412 11.622-9.36 1.342-2.949.445-3.425-3.12-3.425h-4.469s-1.046-4.321-3.9-5.662c-2.855-1.342-7.301-4.025-12.067-1.935-4.766 2.091-8.323 3.081-9.984 8.611z"
        fill="#BD6AF0"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M215.641 201.595a2.97 2.97 0 00-.734 1.107c3.674-2.223 8.276-5.67 9.36-8.112 1.342-2.979.445-3.424-3.12-3.424h-4.469s1.342 4.321 1.342 5.811c0 1.49-.593 2.832-2.379 4.618zM195.267 203.919s-1.248-4.36 1.037-4.773c2.286-.414 4.782 5.194 4.782 5.194a15.68 15.68 0 01-5.819-.421v0z"
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M257.636 401.907h29.328c-.562-3.588-2.871-2.957-3.175-8.518-.156-2.8 2.434-6.24 2.215-9.937-.187-3.034-3.174-6.139-3.408-9.602-.203-3.12 2.34-6.599 2.098-9.968-.234-3.183-3.268-6.24-3.533-9.555-.266-3.315 2.238-6.732 1.942-10-.297-3.268-3.378-6.24-3.705-9.485-.328-3.245 2.082-6.879 1.708-10.046-.39-3.362-3.565-6.24-3.994-9.36-.475-3.456 1.771-7.137 1.248-10.14-.647-3.651-4.04-6.287-4.758-8.978-1.333-5.015-1.162-9.851-2.737-10.14-1.576-.289-2.06 4.399-3.331 9.695-.64 2.66-3.962 5.359-4.508 9.009-.445 2.957 1.903 6.552 1.521 9.984-.344 3.081-3.44 6.038-3.737 9.36-.288 3.12 2.223 6.615 1.982 9.899-.242 3.283-3.245 6.24-3.448 9.492-.203 3.253 2.379 6.654 2.2 9.859-.18 3.206-3.12 6.389-3.276 9.548-.164 3.346 2.48 6.715 2.34 9.82-.141 3.432-3.05 6.583-3.12 9.586-.133 3.65 2.542 7.02 2.464 9.797-.179 6.021-2.94 4.773-3.042 9.625l.726.055z"
        fill="#BD6AF0"
      />
      <Path
        opacity={0.5}
        d="M257.636 401.907h29.328c-.562-3.588-2.871-2.957-3.175-8.518-.156-2.8 2.434-6.24 2.215-9.937-.187-3.034-3.174-6.139-3.408-9.602-.203-3.12 2.34-6.599 2.098-9.968-.234-3.183-3.268-6.24-3.533-9.555-.266-3.315 2.238-6.732 1.942-10-.297-3.268-3.378-6.24-3.705-9.485-.328-3.245 2.082-6.879 1.708-10.046-.39-3.362-3.565-6.24-3.994-9.36-.475-3.456 1.771-7.137 1.248-10.14-.647-3.651-4.04-6.287-4.758-8.978-1.333-5.015-1.162-9.851-2.737-10.14-1.576-.289-2.06 4.399-3.331 9.695-.64 2.66-3.962 5.359-4.508 9.009-.445 2.957 1.903 6.552 1.521 9.984-.344 3.081-3.44 6.038-3.737 9.36-.288 3.12 2.223 6.615 1.982 9.899-.242 3.283-3.245 6.24-3.448 9.492-.203 3.253 2.379 6.654 2.2 9.859-.18 3.206-3.12 6.389-3.276 9.548-.164 3.346 2.48 6.715 2.34 9.82-.141 3.432-3.05 6.583-3.12 9.586-.133 3.65 2.542 7.02 2.464 9.797-.179 6.021-2.94 4.773-3.042 9.625l.726.055z"
        fill="#fff"
      />
      <Path
        d="M270.225 295.811v104.738M274.804 306.793l-4.774 4.127-3.908-5.211M274.804 325.022l-4.774 4.126-3.908-5.21M274.804 342.166l-4.774 4.127-3.908-5.211M274.804 362.571l-4.774 4.126-3.908-5.21M274.804 383.187l-4.774 4.126-3.908-5.211"
        stroke="#263238"
        strokeMiterlimit={10}
      />
      <Path
        d="M89.678 383.99h38.049c-.733-4.68-3.721-3.838-4.119-11.053-.195-3.627 3.167-8.127 2.871-12.893-.234-3.9-4.111-7.964-4.415-12.48-.273-4.056 3.034-8.58 2.714-12.932-.304-4.134-4.227-8.105-4.578-12.395-.351-4.29 2.901-8.743 2.519-12.979-.382-4.235-4.383-8.135-4.805-12.308-.436-4.298 2.699-8.923 2.223-13.034-.514-4.36-4.625-8.128-5.187-12.145-.624-4.477 2.294-9.258 1.615-13.127-.842-4.735-5.242-8.159-6.17-11.645-1.731-6.513-1.513-12.785-3.557-13.19-2.176-.437-2.667 5.709-4.321 12.581-.827 3.456-5.14 6.95-5.85 11.7-.57 3.83 2.473 8.494 1.974 12.956-.445 3.994-4.454 7.8-4.844 12.168-.367 4.079 2.886 8.58 2.566 12.847-.312 4.149-4.204 8.104-4.477 12.316-.273 4.212 3.12 8.627 2.862 12.784-.257 4.157-4.056 8.291-4.25 12.394-.211 4.337 3.213 8.713 3.05 12.738-.188 4.461-3.955 8.58-4.096 12.48-.171 4.726 3.307 9.094 3.198 12.698-.234 7.8-3.814 6.201-3.9 12.48l.928.039z"
        fill="#BD6AF0"
      />
      <Path
        d="M106.035 246.336v135.891M111.979 260.586l-6.201 5.351-5.07-6.763M111.979 284.236l-6.201 5.351-5.07-6.755M111.979 306.481l-6.201 5.351-5.07-6.755M111.979 332.955l-6.201 5.35-5.07-6.762M111.979 359.701l-6.201 5.351-5.07-6.755"
        stroke="#263238"
        strokeMiterlimit={10}
      />
      <Path
        d="M66.66 389.941h28.174c-.538-3.447-2.753-2.839-3.05-8.182-.148-2.691 2.34-6.014 2.13-9.547-.18-2.909-3.05-5.897-3.268-9.227-.203-3.003 2.246-6.334 2.004-9.571-.218-3.065-3.12-5.998-3.385-9.181-.265-3.182 2.145-6.474 1.864-9.609-.28-3.136-3.245-6.022-3.557-9.111-.312-3.088 1.997-6.606 1.638-9.648-.374-3.229-3.424-6.022-3.837-8.994-.46-3.315 1.7-6.856 1.193-9.718-.616-3.503-3.9-6.038-4.563-8.627-1.279-4.813-1.123-9.462-2.628-9.766-1.506-.304-1.982 4.236-3.206 9.321-.616 2.559-3.807 5.148-4.33 8.65-.42 2.847 1.834 6.295 1.467 9.594-.335 2.957-3.307 5.796-3.596 9.009-.273 3.027 2.138 6.357 1.904 9.516-.234 3.159-3.12 5.999-3.315 9.119-.195 3.12 2.293 6.388 2.121 9.469-.171 3.081-3.003 6.138-3.12 9.173-.156 3.213 2.34 6.45 2.254 9.43-.132 3.299-2.925 6.326-3.026 9.212-.125 3.51 2.45 6.739 2.34 9.406-.172 5.796-2.824 4.595-2.917 9.251l.71.031z"
        fill="#BD6AF0"
      />
      <Path
        opacity={0.5}
        d="M66.66 389.941h28.174c-.538-3.447-2.753-2.839-3.05-8.182-.148-2.691 2.34-6.014 2.13-9.547-.18-2.909-3.05-5.897-3.268-9.227-.203-3.003 2.246-6.334 2.004-9.571-.218-3.065-3.12-5.998-3.385-9.181-.265-3.182 2.145-6.474 1.864-9.609-.28-3.136-3.245-6.022-3.557-9.111-.312-3.088 1.997-6.606 1.638-9.648-.374-3.229-3.424-6.022-3.837-8.994-.46-3.315 1.7-6.856 1.193-9.718-.616-3.503-3.9-6.038-4.563-8.627-1.279-4.813-1.123-9.462-2.628-9.766-1.506-.304-1.982 4.236-3.206 9.321-.616 2.559-3.807 5.148-4.33 8.65-.42 2.847 1.834 6.295 1.467 9.594-.335 2.957-3.307 5.796-3.596 9.009-.273 3.027 2.138 6.357 1.904 9.516-.234 3.159-3.12 5.999-3.315 9.119-.195 3.12 2.293 6.388 2.121 9.469-.171 3.081-3.003 6.138-3.12 9.173-.156 3.213 2.34 6.45 2.254 9.43-.132 3.299-2.925 6.326-3.026 9.212-.125 3.51 2.45 6.739 2.34 9.406-.172 5.796-2.824 4.595-2.917 9.251l.71.031z"
        fill="#fff"
      />
      <Path
        d="M78.758 288.027v100.612M83.158 298.572l-4.587 3.963-3.752-5.008M83.158 316.083l-4.587 3.963-3.752-5.008M83.158 332.557l-4.587 3.962-3.752-5.007M83.158 352.15l-4.587 3.963-3.752-5M83.158 371.955l-4.587 3.962-3.752-5"
        stroke="#263238"
        strokeMiterlimit={10}
      />
      <Path
        d="M283.352 410.175h38.057c-.734-4.68-3.721-3.838-4.119-11.045-.203-3.635 3.159-8.128 2.871-12.901-.242-3.9-4.119-7.956-4.415-12.48-.273-4.056 3.034-8.58 2.714-12.933-.304-4.134-4.235-8.096-4.578-12.394-.344-4.298 2.901-8.744 2.519-12.979-.382-4.236-4.384-8.128-4.805-12.309-.421-4.18 2.699-8.915 2.215-13.026-.507-4.368-4.625-8.135-5.179-12.152-.624-4.477 2.293-9.259 1.607-13.12-.835-4.734-5.242-8.158-6.17-11.653-1.724-6.505-1.505-12.776-3.549-13.19-2.176-.429-2.675 5.718-4.321 12.59-.835 3.447-5.14 6.949-5.85 11.7-.569 3.837 2.473 8.502 1.973 12.955-.444 3.994-4.461 7.8-4.851 12.168-.367 4.088 2.894 8.58 2.574 12.855-.312 4.142-4.204 8.096-4.477 12.308-.273 4.212 3.12 8.627 2.862 12.792-.257 4.165-4.056 8.284-4.259 12.387-.202 4.336 3.222 8.72 3.05 12.745-.179 4.454-3.954 8.58-4.087 12.48-.172 4.734 3.307 9.102 3.198 12.706-.234 7.8-3.814 6.201-3.939 12.48l.959.016z"
        fill="#BD6AF0"
      />
      <Path
        d="M299.693 272.528V408.42M305.629 286.771l-6.193 5.351-5.07-6.755M305.629 310.428l-6.193 5.351-5.07-6.763M305.629 332.674l-6.193 5.343-5.07-6.755M305.629 359.139l-6.193 5.351-5.07-6.755M305.629 385.893l-6.193 5.351-5.07-6.763"
        stroke="#263238"
        strokeMiterlimit={10}
      />
      <Path
        d="M141.154 301.449l-4.771-.159-2.865 85.916 4.771.159 2.865-85.916z"
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M160.479 277.341l-2.597.624v8.595l2.878.843-.281-10.062z"
        fill="#BD6AF0"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M110.13 272.598l.125 29.133 48.313 5.008-.46 9.219 17.792-15.264-15.421-23.353-.039 9.227-50.31-13.97z"
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M110.13 272.598l-3.9.437.491 29.975 3.534-1.279-.125-29.133z"
        fill="#BD6AF0"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M106.721 303.01l49.647 4.914 2.2-1.185-48.313-5.008-3.534 1.279zM156.368 307.924l-.124 8.136 1.864-.102.46-9.219-2.2 1.185z"
        fill="#BD6AF0"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M60.857 391.314s67.221-33.158 169.432-16.232c80.083 13.26 106.447 47.518 106.447 47.518"
        fill="#fff"
      />
      <Path
        d="M60.857 391.314s67.221-33.158 169.432-16.232c80.083 13.26 106.447 47.518 106.447 47.518"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M175.829 376.619l-12.597-5.093c-62.244 3.12-101.244 22.62-101.244 22.62l-5.07 1.154A97.108 97.108 0 0045 401.844l18.502.297 31.707-2.067-22.753 8.252 22.05-4.828 36.512-1.381-21.364-5.507 33.064-3.447-31.012.686 24.96-5.093 32.276-5.242-11.7-.694 2.894-.959 15.693-5.242zM254.258 381.65l7.02 4.29-17.16-.39 7.8 4.29-4.68 1.56 11.31 5.46-10.92 1.56 10.53 8.58-58.11.39 16.38 6.24-6.24 2.73 39.78 6.24 43.29 10.92-18.33-10.14s41.73 11.31 43.29 12.09c1.56.78 10.53 4.29 11.7 4.68 1.17.39-14.04-11.7-14.04-11.7l15.6 3.9-15.6-17.55 7.02.78-5.07-4.29 10.14 4.29s-28.08-22.62-73.71-33.93z"
        fill="#BD6AF0"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_315_2"
          x1={205.5}
          y1={-18}
          x2={205.5}
          y2={375}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#AA5BC6" />
          <Stop offset={1} stopColor="#440A67" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_315_2"
          x1={205.5}
          y1={-18}
          x2={205.5}
          y2={375}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#AA5BC6" />
          <Stop offset={1} stopColor="#440A67" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent