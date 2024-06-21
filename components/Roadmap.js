import Feature from "./Feature";

export default function Roadmap() {
  return (
    <div id="roadmap">
      <h2 className="text-4xl font-bold text-center mb-8">What to expect</h2>
      <ul className="flex sm:flex-row flex-col flex-wrap justify-around gap-4 w-full">
        <h2 className="text-2xl font-bold w-full text-center">
          Phase 1: Foundation
        </h2>
        <Feature>Summon the courage to start 🥷</Feature>
        <Feature>Continuous UI upgrades</Feature>
        <Feature progress={""}>Authenticate Users with Wallet Address</Feature>

        <Feature>Allow admin to set voting period</Feature>
        <Feature>
          Allow setting quorum thresholds and minimum participation
          requirements.
        </Feature>

        <h2 className="text-2xl font-bold w-full text-center">
          Phase 2: Access Control and User Roles
        </h2>
        <Feature>Improve users profile page</Feature>
        <Feature progress={""}>
          Add more configuration to Governance Page creation
        </Feature>
        <Feature>
          Allow Governance Page Admin to add Access Control. eg: allowing only
          users with specific token or nft to view Governance page
        </Feature>
        <Feature>
          Define different user roles (e.g., admins, moderators, members) and
          their permissions.
        </Feature>
        <Feature>
          Ability to set who can create proposals (e.g., any token/NFT holders,
          only certain wallet)
        </Feature>

        <h2 className="text-2xl font-bold w-full text-center">
          Phase 3: Templates and Proposals
        </h2>
        <Feature>Templates for common types of proposals.</Feature>
        <Feature>
          Allow users to add a proposal to topics created by Admin
        </Feature>

        <h2 className="text-2xl font-bold w-full text-center">
          Phase 4: Notifications and Analytics
        </h2>
        <Feature>
          Configurable notification settings for different actions (e.g., new
          proposals, voting reminders).
        </Feature>
        <Feature>
          Detailed analytics on voting patterns and participation.
        </Feature>

        <h2 className="text-2xl font-bold w-full text-center">
          Phase 5: Integrations
        </h2>
        <Feature>
          Integration with External tools e.g., Console/Discord for community
          discussion
        </Feature>
      </ul>
    </div>
  );
}
