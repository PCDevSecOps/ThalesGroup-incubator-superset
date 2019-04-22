# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
"""add_hive_partition_column_to_sqla_model.py

Revision ID: ed8da0d765e1
Revises: d1385e981f11
Create Date: 2019-04-03 12:15:23.223445

"""

# revision identifiers, used by Alembic.
revision = 'ed8da0d765e1'
down_revision = 'd1385e981f11'

from alembic import op
import sqlalchemy as sa


def upgrade():
    op.add_column('tables', sa.Column('hive_partitions', sa.Text(), nullable=True))

def downgrade():
    op.drop_column('tables', 'hive_partitions')
