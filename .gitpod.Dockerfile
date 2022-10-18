FROM devfactory/workspace-full

USER root

RUN mkdir ~/.aws \
    && touch ~/.aws/credentials \
    && touch ~/.aws/config

RUN chmod -R a+rwx  ~/.aws
