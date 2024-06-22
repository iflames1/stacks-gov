import Feature from "./Feature";

export default function Roadmap() {
  return (
    <div id="roadmap">
      <h2 className="text-4xl font-bold text-center mb-8">What to expect</h2>
      <div className="max-w-6xl mx-auto">
        <div className="py-8">
          <h2 className="text-2xl mb-4 font-bold w-full text-center">
            Phase 1: Foundation
          </h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between">
            <Feature progress={"done"}>Summon the courage to start 🥷</Feature>
            <Feature>Continuous UI upgrades</Feature>
            <Feature>Authenticate Users with Wallet Address</Feature>
            <Feature>Allow admin to set voting period</Feature>
          </div>
        </div>

        <div className="py-8">
          <h2 className="text-2xl mb-4 font-bold w-full text-center">
            Phase 2: Access Control and User Roles
          </h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between">
            <Feature>
              Add more configuration to Governance Page creation
            </Feature>
            <Feature>
              Allow Governance Page Admin to add Access Control. eg: allowing
              only users with specific token or nft to view Governance page
            </Feature>
            <Feature>
              Allow setting quorum thresholds and minimum participation
              requirements.
            </Feature>
            <Feature>
              Ability to set who can create proposals (e.g., any token/NFT
              holders, only certain wallet)
            </Feature>
          </div>
        </div>

        <div className="py-8">
          <h2 className="text-2xl mb-4 font-bold w-full text-center">
            Phase 3: Templates and Proposals
          </h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between">
            <Feature>Improve users profile page</Feature>
            <Feature>
              Define different user roles (e.g., admins, moderators, members)
              and their permissions.
            </Feature>
            <Feature>Templates for common types of proposals.</Feature>
            <Feature>
              Allow users to add a proposal to topics created by Admin
            </Feature>
          </div>
        </div>

        <div className="py-8">
          <h2 className="text-2xl mb-4 font-bold w-full text-center">
            Phase 4: Notifications and Analytics
          </h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between">
            <Feature>
              Configurable notification settings for different actions (e.g.,
              new proposals, voting reminders).
            </Feature>
            <Feature>
              Detailed analytics on voting patterns and participation.
            </Feature>
            <Feature>
              Toogle notification when user is gifted from their STX-GOV profile
            </Feature>
          </div>
        </div>

        <div className="py-8">
          <h2 className="text-2xl mb-4 font-bold w-full text-center">
            Phase 5: Integrations
          </h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between">
            <Feature>
              Integration with External tools e.g., Console/Discord for
              community discussion
            </Feature>
          </div>
        </div>
      </div>
    </div>
  );
}
