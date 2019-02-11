FROM python:3.6.5

MAINTAINER Arpit Agarwal <arpit.agarwal@guavus.com>

# Configure environment
ENV user=guavus-raf

ENV LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    HOME=/home/${user} \
    DEBIAN_FRONTEND=noninteractive \
    PATH=/home/${user}/incubator-superset/superset/bin:$PATH \
    PYTHONPATH=./superset/:$PYTHONPATH
    
RUN useradd --user-group --create-home --no-log-init --shell /bin/bash ${user} \
    && \
    mkdir -p $HOME/incubator-superset \
    mkdir -p /etc/security/keytabs/ \
    mkdir -p /etc/cert/ && \
    chmod +x /etc/cert && \
    chmod +x /usr/local/bin && \
    chown -R ${user}:${user} $HOME

RUN apt-get update && \
    apt-get install -y gcc build-essential libssl-dev \
        libffi-dev libsasl2-dev libldap2-dev \
        libsasl2-modules libsasl2-2 libsasl2-modules-gssapi-mit krb5-user && \
    apt-get clean && \
    rm -r /var/lib/apt/lists/* && \
    apt-get autoremove -y && \
    curl -sL https://deb.nodesource.com/setup_8.x | bash - \
    && \
    apt-get install -y nodejs && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get install -y yarn

WORKDIR $HOME/incubator-superset

COPY ./ ./

RUN pip install --upgrade setuptools pip \
    && pip install --no-cache-dir wheel \
    && python ./setup.py bdist_wheel \ 
    && pip install --no-cache-dir ./dist/*.whl \
    && rm -rf /root/.cache/pip

RUN cd superset/assets \
    && yarn --non-interactive --frozen-lockfile --link-duplicates \
    && yarn run sync-backend \
    && yarn run build \
    && rm -rf node_modules \
    && yarn cache clean \
    apt-get remove -y \
        \*-dev \
        yarn \
        setuptools \
        build-essential \
        python-wheel \
    && \
    apt-get purge --auto-remove -y nodejs yarn

COPY docker-init.sh /usr/local/bin/

USER ${user}

EXPOSE 8088

ENTRYPOINT ["docker-init.sh"]
