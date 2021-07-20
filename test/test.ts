import { config } from 'dotenv';
config({ path: 'test/.env' });

import "./unit/env.test"
import "./unit/queryAPOD.test"
