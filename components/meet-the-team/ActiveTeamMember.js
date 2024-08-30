'use client';

import { useState } from 'react';
import TeamModal from './TeamModal';

export default function ActiveTeamMember() {
  const [activeTeamMember, setActiveTeamMember] = useState(null);

  return (
    <div className="hidden md:block">
      {activeTeamMember && (
        <TeamModal
          activeTeamMember={activeTeamMember}
          setActiveTeamMember={setActiveTeamMember}
        />
      )}
    </div>
  );
}
