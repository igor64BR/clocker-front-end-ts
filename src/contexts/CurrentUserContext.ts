import { createContext } from 'react';

import { Response } from '../pages/Layouts/Profile/ProfileLayout';

export default createContext<{ currentUser?: Response }>({});
