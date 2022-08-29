import MeetupList from "../components/meetups/MeetupList";

const dummydata = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Amager_Strandpark_-_kite_surfers.jpg",
    address: "Amager Beach Park, Copenhagen, Denmark",
    description:
      "This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m3",
    title: "This is a third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/ae/Nyhavn_%28Copenhagen%29.jpg",
    address: "Nyhavn in Copenhagen, Denmark",
    description:
      "This is a third, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  }
];

function AllMeetup() {
  return (
    <section>
      <h1>AllMeetup</h1>
     <MeetupList meetups={dummydata}/>
    </section>
  );
}
export default AllMeetup;
