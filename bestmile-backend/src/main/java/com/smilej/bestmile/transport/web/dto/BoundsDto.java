package com.smilej.bestmile.transport.web.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class BoundsDto {

    private BoundCoordinateDto northEast;
    private BoundCoordinateDto southWest;

}