FROM node:5.11
WORKDIR /usr/proj
ENTRYPOINT ["npm"]
CMD ["start"]
