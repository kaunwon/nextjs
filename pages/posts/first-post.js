import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Introduction</h1>
      <p>Hi, my name is Ga Eun Won, and below is my id photo.</p>
      <img src="/picture.jpg" alt="Id photo" width="120" height="160"/>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}