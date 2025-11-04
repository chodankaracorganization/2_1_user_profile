import UserProfile from './components/UserProfile'

export default function Home() {
  return (
    <main>
      <h1>User Profiles</h1>
      <UserProfile
        username="ashish chaudhary"
        email="ashish.chaudhary@example.com"
      />
      <UserProfile
        username="abhi desai"
        email="abhi.desai@example.com"
      />
    </main>
  );
}
