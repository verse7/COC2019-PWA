<template>
<div>
  <div class="flex content-center absolute bottom-0 mb-4 px-4 py-2 mx-auto z-50 inset-x-0 top-0">
    <router-link to="/">
      <CloseIcon class="opacity-75 close-icon" w="32px" h="32px"/>
    </router-link>
  </div>
  <video v-show="!isCaptured" class="camera-feed z-10" id="player" autoplay></video>
  <canvas v-show="isCaptured" id="canvas" class="camera-capture z-40"></canvas>
  <div class="flex content-center justify-center absolute bottom-0 mb-4 mx-auto z-50 inset-x-0 bottom-0 px-4">
    <button v-if="!isCaptured" @click="captureImage" class="flex content-center justify-center border-4 border-teal-400 rounded-full p-2 opacity-75">
      <div class="bg-teal-400 p-6 rounded-full"></div>
    </button>
    <div v-else class="flex content-center justify-between w-full">
      <button class="bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-full" @click="isCaptured=false;">Cancel</button>
      <button class="bg-teal-400 text-gray-800 font-bold py-2 px-4 rounded-full" @click="handleUpload">Upload</button>
    </div>
  </div>
</div>
</template>

<script>
import CloseIcon from 'vue-ionicons/dist/md-close';

export default {
  name: 'camera',
  components: {
    CloseIcon
  },
  data() {
    return {
      isCaptured: false,
      img: null
    }
  },
  mounted() {
    this.isCaptured = false;
    const player = document.getElementById('player');

    const constraints = {
      video: true,
    };

    // Attach the video stream to the video element and autoplay.
    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      player.srcObject = stream;
    });
  },
  methods: {
    captureImage() {
      console.log('capturing');

      const player = document.getElementById('player');
      const canvas = document.getElementById('canvas');
      const context = canvas.getContext('2d');

      context.drawImage(player, 0, 0, canvas.width, canvas.height);

      this.isCaptured = true;

      const img = new Image();
      img.src = canvas.toDataURL("image/jpg");

      this.img = img;
      console.log(img);
    },

    handleUpload() {
      let location;
      navigator.geolocation.getCurrentPosition(position => {
        // perform a reverse geolocation query to get street address
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}}&key=AIzaSyAxxF7vCWo_cgyLv2-JE9wYHJvVwsAJJjY`)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        })
      });
      const base64ImageContent = this.img.src.replace(/^data:image\/(png|jpg);base64,/, "");
      const blob = this.base64ToBlob(base64ImageContent, 'image/png');

      const formData = new FormData();
      formData.append('picture', blob);

      console.log('uploading');
    },

    base64ToBlob(base64, mime) {
      mime = mime || '';
      var sliceSize = 1024;
      var byteChars = window.atob(base64);
      var byteArrays = [];

      for (var offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
        var slice = byteChars.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
      }

      return new Blob(byteArrays, {type: mime});
    }
  }
}
</script>

<style scoped>
video, canvas {
  object-fit: cover;
}

.close-icon {
  fill: #fff;
}

.camera-feed, .camera-capture {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (min-aspect-ratio: 16/9) {
  .camera-feed, .camera-capture {
    width: 100%;
    height: auto;
  }
}
@media (max-aspect-ratio: 16/9) {
  .camera-feed, .camera-capture {
    width:100%; 
    height: 100%;
    padding:0
  }
}
</style>