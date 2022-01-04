$(function () {
  //각 지점의 위도 경도를 저장할 배열 만들기
  var mapX = [37.5232436, 35.1759558];
  var mapY = [127.0419538, 129.1309958];
  var index = 0;
  
function createMap() {
  var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(mapX[index], mapY[index]), // 지도의 중심좌표
      level: 4, // 지도의 확대 레벨
    };

  var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

  var imageSrc =
      "images/pin.png", // 마커이미지의 주소입니다
    imageSize = new kakao.maps.Size(32, 32), // 마커이미지의 크기입니다
    imageOption = { offset: new kakao.maps.Point(19, 40) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  var markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    ),
    markerPosition = new kakao.maps.LatLng(mapX[index], mapY[index]); // 마커가 표시될 위치입니다

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage, // 마커이미지 설정
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);
}

createMap();

$(".store>div").on("click",function(){
    index =$(this).index();
    createMap();
    $(this).addClass("active").siblings().removeClass("active");
})
});
