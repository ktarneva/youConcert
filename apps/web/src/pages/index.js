import LiveStream from "../../../rtmp/liveStream";
export default function Home() {
  return (
    <div>
      <h1>
        Welcome to YouConcert, the best LIVE streaming service for Concerts!
        <LiveStream />
      </h1>
    </div>
  );
}
