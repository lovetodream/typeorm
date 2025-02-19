"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomRepositoryEntity = void 0;
const typeorm_1 = require("typeorm");
function getCustomRepositoryEntity(entities) {
    const customRepositoryEntities = new Array();
    const typeormEntityRepositories = (0, typeorm_1.getMetadataArgsStorage)().entityRepositories;
    for (const entity of entities) {
        const isCustomRepository = entity instanceof Function &&
            (entity.prototype instanceof typeorm_1.Repository ||
                entity.prototype instanceof typeorm_1.AbstractRepository);
        if (isCustomRepository) {
            const entityRepositoryMetadataArgs = typeormEntityRepositories.find((repository) => {
                return (repository.target ===
                    (entity instanceof Function ? entity : entity === null || entity === void 0 ? void 0 : entity.constructor));
            });
            if (entityRepositoryMetadataArgs) {
                const targetEntity = entityRepositoryMetadataArgs.entity;
                const isEntityRegisteredAlready = entities.indexOf(targetEntity) !== -1;
                if (!isEntityRegisteredAlready) {
                    customRepositoryEntities.push(targetEntity);
                }
            }
        }
    }
    return customRepositoryEntities;
}
exports.getCustomRepositoryEntity = getCustomRepositoryEntity;
