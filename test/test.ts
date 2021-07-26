import { config } from 'dotenv';
config({ path: 'test/.env' });

import "./unit/env.test"
import "./unit/queryAPOD.test"
import "./unit/astronometry.test"
