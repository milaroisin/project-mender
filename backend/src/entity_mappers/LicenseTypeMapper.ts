import { ObjectMapper } from './ObjectMapper';
import { LicenseType } from '../entities/LicenseType';
import { LicenseTypeDTO } from '../dtos/LicenseTypeDTO';
import { LicenseType as LicenseTypeEnum } from '../enums/LicenseType';
import { BadRequestError } from '../errors/BadRequestError';

class LicenseTypeMapper implements ObjectMapper<LicenseType, LicenseTypeDTO> {

    toDTO(licenseType: LicenseType) : LicenseTypeDTO {
        const licenseTypeDTO : LicenseTypeDTO = new LicenseTypeDTO();
        licenseTypeDTO.type = licenseType.type;
        return licenseTypeDTO;
    }

    fromDTO(licenseTypeDTO: LicenseTypeDTO) : LicenseType {
        const licenseType : LicenseType = new LicenseType();
        if (!(licenseTypeDTO.type in LicenseTypeEnum)) {
            throw new BadRequestError('Invalid License Type. Allowed Types: [' +
                `${Object.keys(LicenseTypeEnum)}]`);
        }
        licenseType.type = licenseTypeDTO.type;
        return licenseType;
    }
}

export { LicenseTypeMapper };
